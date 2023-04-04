//java object is a un  value that contains multiple values in the same.
var houseKeeper = {
    yearsOfexperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

//call to variable
//thats is a piece information with valor associated
console.log(houseKeeper.name);

//create constructor and call and variable
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = years;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}
//call the new constructor
var houseKeeper1 = new HouseKeeper(12, "Edu", ["lobby", "bathroom"]);