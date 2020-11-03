class gameCharacter {
    constructor(pName, pAge, pHealth, pXpos, pYpos) {
        this.name = pName;
        this.age = pAge;
        this.health = pHealth;
        this.xPos = pXpos;
        this.yPos = pYpos;
        this.inventory = ["Knife", "Piece of beef"];
        this.move = function(x, y) {
            this.xPos += x;
            this.yPos += y;
        };
    }

    move_x(x) { this.xPos += x; }
    move_y(y) { this.yPos += y; }
}

class humanCharacter extends gameCharacter {
    constructor(pName, pAge, pHealth, pXpos, pYpos) {
        super(pName, pAge, pHealth, pXpos, pYpos);
        this.race = "Human";
        this.title = this.name + " the " + this.race;
    }
}

var gc1 = new humanCharacter("Lama", 24, 100, 1, 1);
gc1.move_x(5);
gc1.move_y(3);
console.log(gc1)
console.log(gc1.title)
