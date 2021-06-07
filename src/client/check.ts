import { conf, lang, error } from "./utils";

interface Validator {
  name: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  type: string;
}

const confValidator: Validator[] = [
  {name: "deleteAllVehicles", type: "boolean"},
  {name: "deleteAllPeds", type: "boolean"},
  {name: "pedSpawning", type: "boolean"},
  {name: "pedDensity", type: "number"},
  {name: "carSpawning", type: "boolean"},
  {name: "carDensity", type: "number"},
  {name: "parkedCarSpawning", type: "boolean"},
  {name: "parkedCarDensity", type: "number"},
  {name: "garbageTrucks", type: "boolean"},
  {name: "randomBoats", type: "boolean"},
  {name: "randomTrains", type: "boolean"},
  {name: "policeIgnorePlayer", type: "boolean"},
  {name: "dispatchTypes", name2: "policeAutomobile", type: "boolean"},
  {name: "dispatchTypes", name2: "policeHelicopter", type: "boolean"},
  {name: "dispatchTypes", name2: "fireDepartment", type: "boolean"},
  {name: "dispatchTypes", name2: "swatAutomobile", type: "boolean"},
  {name: "dispatchTypes", name2: "ambulanceDepartment", type: "boolean"},
  {name: "dispatchTypes", name2: "policeRiders", type: "boolean"},
  {name: "dispatchTypes", name2: "policeVehicleRequest", type: "boolean"},
  {name: "dispatchTypes", name2: "policeRoadBlock", type: "boolean"},
  {name: "dispatchTypes", name2: "policeAutomobileWaitPulledOver", type: "boolean"},
  {name: "dispatchTypes", name2: "policeAutomobileWaitCruising", type: "boolean"},
  {name: "dispatchTypes", name2: "gangs", type: "boolean"},
  {name: "dispatchTypes", name2: "swatHelicopter", type: "boolean"},
  {name: "dispatchTypes", name2: "policeBoat", type: "boolean"},
  {name: "dispatchTypes", name2: "armyVehicle", type: "boolean"},
  {name: "dispatchTypes", name2: "bikerBackup", type: "boolean"},
];

const checkConf = (): void => {
  for (let i = 0; i < confValidator.length; i++) {
    if (Object.prototype.hasOwnProperty.call(confValidator[i], "name6")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3][
          confValidator[i].name4
        ][confValidator[i].name5][confValidator[i].name6] !== confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${confValidator[i].name3}.${
            confValidator[i].name4
          }.${confValidator[i].name5}.${confValidator[i].name6} should be a ${
            confValidator[i].type
          }, but was a ${typeof conf[confValidator[i].name][confValidator[i].name2][
            confValidator[i].name3
          ][confValidator[i].name4][confValidator[i].name5][confValidator[i].name6]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name5")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3][
          confValidator[i].name4
        ][confValidator[i].name5] !== confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${confValidator[i].name3}.${
            confValidator[i].name4
          }.${confValidator[i].name5} should be a ${confValidator[i].type}, but was a ${typeof conf[
            confValidator[i].name
          ][confValidator[i].name2][confValidator[i].name3][confValidator[i].name4][
            confValidator[i].name5
          ]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name4")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3][
          confValidator[i].name4
        ] !== confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${confValidator[i].name3}.${
            confValidator[i].name4
          } should be a ${confValidator[i].type}, but was a ${typeof conf[confValidator[i].name][
            confValidator[i].name2
          ][confValidator[i].name3][confValidator[i].name4]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name3")) {
      if (
        typeof conf[confValidator[i].name][confValidator[i].name2][confValidator[i].name3] !==
        confValidator[i].type
      ) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2}.${
            confValidator[i].name3
          } should be a ${confValidator[i].type}, but was a ${typeof conf[confValidator[i].name][
            confValidator[i].name2
          ][confValidator[i].name3]}.`,
          "config",
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(confValidator[i], "name2")) {
      if (typeof conf[confValidator[i].name][confValidator[i].name2] !== confValidator[i].type) {
        error(
          `${confValidator[i].name}.${confValidator[i].name2} should be a ${
            confValidator[i].type
          }, but was a ${typeof conf[confValidator[i].name][confValidator[i].name2]}.`,
          "config",
        );
      }
    } else {
      if (typeof conf[confValidator[i].name] !== confValidator[i].type) {
        error(
          `${confValidator[i].name} should be a ${confValidator[i].type}, but was a ${typeof conf[
            confValidator[i].name
          ]}.`,
          "config",
        );
      }
    }
  }
};


export { checkConf };
