const prompt = require("prompt-sync")();

const word = prompt("Anna sana: ");

const reversed = word.split("").reverse().join("");

if (word === reversed) {
    console.log("Sana on palindromi!");
} else {
    console.log("Sana ei ole palindromi.");
}