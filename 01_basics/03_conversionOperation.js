let score = "33abc"
let score2 = null
let score3 = undefined

//console.log(typeof score);
//console.log([typeof (score), typeof score2, typeof score3]);

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let valueInNumber2 = Number(score2)
//console.log(typeof valueInNumber2);
//console.log(valueInNumber2);

let valueInNumber3 = Number(score3)
//console.log(typeof valueInNumber3);
//console.log(valueInNumber3);

// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined => NaN

let isLoggedin = 1
let booleanisLoggedin = Boolean(isLoggedin)

console.log(booleanisLoggedin);

// 1 => true ; 0 => false
// "" => false
//"Aditya" => true

let run = 33

let string = String(run)
console.log(string)
console.log(typeof string)