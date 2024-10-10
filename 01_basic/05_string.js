let name = "Babai"
const age = 24
const userName = new String("Babai-88")
const repoCount = 50

console.log(name + repoCount) + "valu";

// not use in mordenday



console.log(`Hello my age is ${age} and my name is ${name}`);

console.log(userName);
console.log(userName[0]);
console.log(userName.__proto__);

console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.charAt());
console.log(userName.indexOf('8'));

let newUse= userName.substring(0,6)
console.log(newUse);

let anotherUse = userName.slice(-7,5)
console.log(anotherUse);

let anotherUse1 = "    Babai   "
console.log(anotherUse1);
console.log(anotherUse1.trim());

const url = "https://babai.com/my%20about"


console.log(url.replace('%20','-'));

console.log(url.includes("babai"));
console.log(url.includes("subhra"));

console.log(url.split("/"));