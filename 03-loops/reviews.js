var reviews = [5, 10, 11, 9, 24];
var total2 = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total2 += reviews[i];
}
console.log("Total = " + total2);
console.log("Average= " + (total2 / reviews.length));
