import { World } from "fivem-js";
import ts from "typescript";
import { script } from "../config";
let callbacks: unknown;
callbacks = 0;
callbacks = {};
const RegisterNetEvent = (data: string) => {
  ts.transpile(`RegisterNetEvent(${data})`);
};
RegisterNetEvent(`gm_${script}:callback`);
onNet(`gm_${script}:callback`, (result: unknown, id: number) => {
  callbacks[id](result);
  delete callbacks[id];
});
const serverCallback = (name: string, data: unknown, cb: unknown): void => {
  let id: number;
  id = 0;
  id = Object.keys(callbacks).length++;
  callbacks[id] = cb;
  data["CallbackID"] = id;
  emitNet(name, data);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

import { conf, lang } from "./utils";

const configLoaded = (): void => {
  SetGarbageTrucks(conf["garbageTrucks"])
  SetRandomBoats(conf["randomBoats"])
  SetRandomTrains(conf["randomTrains"])
  if (conf["policeIgnorePlayer"]) {
    SetPoliceIgnorePlayer(PlayerPedId(), true)
    SetDispatchCopsForPlayer(PlayerPedId(), false)
  } else {
    SetPoliceIgnorePlayer(PlayerPedId(), false)
    SetDispatchCopsForPlayer(PlayerPedId(), true)
  }
  EnableDispatchService(1, conf["dispatchTypes"]["policeAutomobile"])
  EnableDispatchService(2, conf["dispatchTypes"]["policeHelicopter"])
  EnableDispatchService(3, conf["dispatchTypes"]["fireDepartment"])
  EnableDispatchService(4, conf["dispatchTypes"]["swatAutomobile"])
  EnableDispatchService(5, conf["dispatchTypes"]["ambulanceDepartment"])
  EnableDispatchService(6, conf["dispatchTypes"]["policeRiders"])
  EnableDispatchService(7, conf["dispatchTypes"]["policeVehicleRequest"])
  EnableDispatchService(8, conf["dispatchTypes"]["policeRoadBlock"])
  EnableDispatchService(9, conf["dispatchTypes"]["policeAutomobileWaitPulledOver"])
  EnableDispatchService(10, conf["dispatchTypes"]["policeAutomobileWaitCruising"])
  EnableDispatchService(11, conf["dispatchTypes"]["gangs"])
  EnableDispatchService(12, conf["dispatchTypes"]["swatHelicopter"])
  EnableDispatchService(13, conf["dispatchTypes"]["policeBoat"])
  EnableDispatchService(14, conf["dispatchTypes"]["armyVehicle"])
  EnableDispatchService(15, conf["dispatchTypes"]["bikerBackup"])
  setTick(() => {
    if (conf["carSpawning"]) {
      SetVehicleDensityMultiplierThisFrame(conf["carDensity"])
      SetRandomVehicleDensityMultiplierThisFrame(1.0)
    } else {
      SetFarDrawVehicles(false)
      SetVehicleDensityMultiplierThisFrame(0.0)
      SetRandomVehicleDensityMultiplierThisFrame(0.0)
    }
    if (conf["parkedCarSpawning"]) {
      SetParkedVehicleDensityMultiplierThisFrame(conf["parkedCarDensity"])
    } else {
      SetParkedVehicleDensityMultiplierThisFrame(0.0)
    }
    if (conf["pedSpawning"]) {
      SetPedDensityMultiplierThisFrame(conf["pedDensity"])
      SetScenarioPedDensityMultiplierThisFrame(conf["pedDensity"], conf["pedDensity"])
    } else {
      SetPedDensityMultiplierThisFrame(0.0)
      SetScenarioPedDensityMultiplierThisFrame(0.0, 0.0)
    }
    if (conf["policeIgnorePlayer"]) {
      CancelCurrentPoliceReport()
    }
  });
};

export { configLoaded };
