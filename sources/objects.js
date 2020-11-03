function gameCharacter(pName, pRace, pAge, pHealth, pXpos, pYpos) {
    this.name = pName;
    this.race = pRace;
    this.age = pAge;
    this.health = pHealth;
    this.xPos = pXpos;
    this.yPos = pYpos;
    this.inventory = ["Knife", "Piece of beef"];
    this.move = function(x, y) {
        this.xPos += x;
        this.yPos += y;
    };
    this.title = this.name + " the " + this.race;
    this.inventory_string = "My inventory : [";
}

var gc1 = new gameCharacter("Lama", "Human", 24, 100, 150, 1, 1);
console.log(`...Le joueur ${gc1.title} à bien été créé !`);

var gc2 = new gameCharacter("Dray", "Human", 25, 100, 150, 1, 2);
console.log(`...Le joueur ${gc2.title} à bien été créé !`);

for (let index = 0; index < gc1.inventory.length; index++) {
    let element = gc1.inventory[index];
    gc1.inventory_string += element + ",";
}

for (let index = 0; index < gc2.inventory.length; index++) {
    let element = gc2.inventory[index];
    gc2.inventory_string += element + ",";
}

console.log(gc1.inventory_string + "]");
console.log(gc2.inventory_string + "]");
