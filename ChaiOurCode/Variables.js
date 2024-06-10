const accountId = 144553
let accountEmail = "ruturaj@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"


// accountId = 2  // not allowed

accountEmail = "ruturajn@gmail.com"
accountPassword = "21212121"
accountCity = "Ahilyanagar"
let accountstate;

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);

/* 
Prefer not to use var
bacause of issue in block scope and functional scope
*/