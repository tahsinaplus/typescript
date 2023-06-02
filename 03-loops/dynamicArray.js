var arr = [1, 2, 3];
console.log("Dynamic Array");
console.log("Before adding element in the array");
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
arr.push(4);
arr.push(5);
console.log("After inserting element in the array");
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var val = arr_2[_a];
    console.log(val);
}
arr.pop();
arr.pop();
console.log("After removing element in the array");
for (var _b = 0, arr_3 = arr; _b < arr_3.length; _b++) {
    var val = arr_3[_b];
    console.log(val);
}
