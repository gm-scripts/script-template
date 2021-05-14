import { script } from "../config.js";

const { VrpProxy, VrpTunnel } = require("@vrpjs/server");
const fs = require("fs");

let vRPServer = null;
let vRPTunnelServer = null;

let config = JSON.parse(fs.readFileSync(`./gmconfig/${script}.json`));

let locales = JSON.parse(
  fs.readFileSync(`./gmlocales/${script}/${config.lang}.json`)
);

onNet(`gm_${script}:getConfig`, (data) => {
  emitNet(`gm_${script}:callback`, source, config, data.CallbackID);
  if (config.framework === "vrp") {
    vRPServer = VrpProxy.getInterface("vRP");
    vRPTunnelServer = VrpTunnel.getInterface("vRP");
  }
});

onNet(`gm_${script}:getLocales`, (data) => {
  emitNet(`gm_${script}:callback`, source, locales, data.CallbackID);
});

export { vRPServer, vRPTunnelServer };
