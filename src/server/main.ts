import ts from "typescript";
import { conf } from "./utils";

setTick(() => {
  if (conf["deleteAllVehicles"]) {
    GetAllVehicles().forEach(veh => {
      if (veh != null) {
        if (!HasVehicleBeenOwnedByPlayer(veh)) {
          DeleteEntity(veh);
        }
      }
    });
  }
  if (conf["deleteAllPeds"]) {
    console.log(GetAllPeds())
    GetAllPeds().forEach(ped => {
      if (ped != null) {
        DeleteEntity(ped);
      }
    });
  }
});
