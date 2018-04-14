  /*
  //export default
  let Airplane = {};

  Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
   },
   {name: 'SkyJet',
    fuelCapacity: 500
   }
  ];

  export default Airplane; //syntax ES6
  */


  //Named Exports
  let availableAirplanes = [
    {
      name: "AeroJet",
      fuelCapacity: 800,
      availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
    },
    {
      name: "SkyJet",
      fuelCapacity: 500,
      availableStaff: ['pilots', 'flightAttendants']
    }
  ]

  let flightRequirements = {
    requiredStaff: 4;
  }

  function meetsStaffRequirements(availableStaff, requiredStaff){
    if (availableStaff.length >= requiredStaff){
    return true;
    } else {
    return false;
    }
  }

  export{availableAirplanes, flightRequirements, meetsStaffRequirements};

  /* export variable and default (combination exports)
  export let availableAirplanes = [
  {name: 'AeroJet',
   fuelCapacity: 800,
   availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   maxSpeed: 1200,
   minSpeed: 300
  },
  {name: 'SkyJet',
   fuelCapacity: 500,
   availableStaff: ['pilots', 'flightAttendants'],
   maxSpeed: 800,
   minSpeed: 200
  }
  ];

  export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
  };

  export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
      return false;
    }
  };

  function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
      return true;
      } else {
      return false;
    }
  };

  export default meetsSpeedRangeRequirements;
  */






  /*
  Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program.

module.exports_exports the module for use in another program.
require() imports the module for use in the current program.
ES6 introduced a more flexible, easier syntax to export modules:

default exports use export default to export JavaScript objects, functions, and primitive data types.
named exports use the export keyword to export data in variables.
named exports can be aliased with the as keyword.
import is a keyword that imports any object, function, or data type.
  */
