const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers,name) {
    let match = drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
    return match;
}
findMatching('Bobby');
    

    

function fuzzyMatch(drivers, string) {
    return drivers
      
      .filter((splitDriver) => splitDriver[0].indexOf(string) === string[0]);
  }
// This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function matchName(drivers,name){

} 
//This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.e
