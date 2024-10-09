let age = "Babai"
let score = 88.2


console.log(typeof score);
console.log(typeof (age));


let valueInNumber = Number(age)
// Number is easyly convert my number But
// if it's string it's convert Nan
// null convert 0
// bulian converstion is true/false or 0/1


console.log(typeof (valueInNumber));
console.log(valueInNumber);

let logInval = -5

let booleanIsLogVal = Boolean(logInval)
console.log(typeof (booleanIsLogVal));
console.log(booleanIsLogVal);
// 1 = true ; 0 = false
// "" = flase 
// "babai" = true
// undefined = false 
// null = false 