let arr: number[] = [1,2,3];
console.log("Dynamic Array");
console.log("Before adding element in the array");
for(let val of arr){
    console.log(val);
}

arr.push(4);
arr.push(5);
console.log("After inserting element in the array");
for(let val of arr){
    console.log(val);
}

arr.pop();
arr.pop();
console.log("After removing element in the array");
for(let val of arr){
    console.log(val);
}
