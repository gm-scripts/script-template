import { script } from "../config.js";
import { configLoaded } from "./main.js";

const { VrpProxy, VrpTunnel } = require("@vrpjs/client");
let vRPServer = null;
let vRP = null;
let ESX = null;

let lang = {};
let conf = {};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let callbacks = {};
RegisterNetEvent(`gm_${script}:callback`);
onNet(`gm_${script}:callback`, (result, id) => {
  callbacks[id](result);
  delete callbacks[id];
});
const serverCallback = (name, data, cb) => {
  let id = Object.keys(callbacks).length++;
  callbacks[id] = cb;
  data["CallbackID"] = id;
  emitNet(name, data);
};

serverCallback(`gm_${script}:getLocales`, {}, (locales) => {
  loadLocales(locales);
});

serverCallback(`gm_${script}:getConfig`, {}, (config) => {
  loadConfig(config);
  if (config.framework === "esx") {
    emit("esx:getSharedObject", (obj) => (ESX = obj));
  } else if (config.framework === "vrp") {
    vRP = VrpProxy.getInterface("vRP");
    vRPServer = VrpTunnel.getInterface("vRP");
  }
  if (
    config.framework != "esx" &&
    config.framework != "vrp" &&
    config.framework != "none"
  ) {
    console.log(
      `^1ERROR(gmconfig/${script}.json): Unknown framework. Please use "esx", "vrp" or "none"`
    );
  }
});

const loadLocales = (locales) => {
  lang = locales;
};

const loadConfig = (config) => {
  conf = config;
  configLoaded();
};

const helpText = (text) => {
  SetTextComponentFormat("STRING");
  AddTextComponentString(text);
  DisplayHelpTextFromStringLabel(0, 0, 1, -1);
};

const missionText = (msg, time) => {
  ClearPrints();
  BeginTextCommandPrint("STRING");
  AddTextComponentSubstringPlayerName(msg);
  EndTextCommandPrint(time, true);
};

const notifyText = (msg) => {
  SetNotificationTextEntry("STRING");
  AddTextComponentString(msg);
  DrawNotification(true, false);
};

export {
  wait,
  serverCallback,
  helpText,
  missionText,
  notifyText,
  lang,
  conf,
  vRP,
  vRPServer,
  ESX,
};
