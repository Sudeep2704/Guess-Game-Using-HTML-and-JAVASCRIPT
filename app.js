let maximum = parseInt(prompt("Enter max numbers"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random()* maximum)+1;
let guess = parseInt(prompt("Enter your first guess"));

while (guess!==targetNum) {
if (guess > targetNum)
 {
    guess = parseInt(prompt("too high ! enter new guess"));

 }
else {
    guess = prompt("toolow! enter new guess")
}
}
console.log("you got it")