const accountID = 144522
let accountEmail = "Khagi@gmail.com"
var accountPassword = "123445"
accountCity = "Jaipur"
let accountState;


// accountID = 2 not allowed

accountEmail = "Adii@gmail.com"
accountPassword = "w3er73"
accountCity = "Gorakhpur"

console.log(accountID)
console.table([accountEmail, accountID, accountPassword, accountCity])

/* 
prefer not to use var because of the issue in block scope and function scope
*/

console.log(accountState)