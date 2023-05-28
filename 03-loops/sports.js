console.log("Sport Array and if statement");
var Sport = ["Soccer", "Cricket", "Baseball", "NBA"];
for (var _i = 0, Sport_1 = Sport; _i < Sport_1.length; _i++) {
    var temp = Sport_1[_i];
    if (temp == "Soccer") {
        console.log(temp + " is most played game in the world");
    }
    else if (temp == "Cricket") {
        console.log(temp + " is most played game in south asia");
    }
    else if (temp == "Baseball") {
        console.log(temp + " is popular game in US/Canada");
    }
    else {
        console.log("I hate this game " + temp);
    }
}
console.log("Before= " + Sport.length);
Sport.push("Hadudu");
Sport.push("Bull");
console.log("After= " + Sport.length);
