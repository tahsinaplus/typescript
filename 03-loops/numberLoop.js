console.log("Number Array and calculation");
var num = [5, 10, 15, 20, 25];
console.log("Printing Number Array------");
var total = 0;
for (var i = 0; i < num.length; i++) {
    //total += numb[i];
    console.log(num[i]);
    total += num[i];
}
console.log("Total number= " + total);
