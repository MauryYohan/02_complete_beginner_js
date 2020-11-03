var characterName = "Lama";
var age = 24;
var numberOfLives = 3;

let message = `Hi! My name is ${characterName} and i'm ${age} years old`;
console.log(message);

let length = characterName.length;
let upperName = characterName.toUpperCase();
let lowerName = characterName.toLowerCase();

let lam = characterName.slice(0, 3);

var health = 50;
console.log(health ** 2);
console.log(health%50);

var number1 = 3;
var number2 = 8;
var result = 0;
// ? :                  -- Result = 8
result = number1 > number2 ? number1 : number2;
// Equivalant a :       -- Result = 8
if (number1 > number2) {
    result = number1;
} else {
    result = number2;
}

/* Si numberOfLives vaut 3 
 * 3 > 1 renvoi True, donc isGameOver vaut false
 * 0 > 0 renvoi False, donc isGameOver vaut True
 */
var isGameOver = !(numberOfLives > 0);

var inventory = ["shirt", "axe", "bread"];

