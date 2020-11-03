var items = ["Axe", "Shirt", "Knife"];
var finalString = "In my inventory, i have ";

items.forEach(
    function(element) {
        finalString += element + " ";
    }
)

console.log(finalString);
