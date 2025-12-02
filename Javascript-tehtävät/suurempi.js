const prompt = require('prompt-sync')();

function getLargest() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Luvut ovat yhtä suuret";
    }
}

console.log("Suurempi luku on:", getLargest());