let reviews: number[] = [5,10,11,9,24];

let total2: number = 0;

for(let i = 0; i<reviews.length; i++){
    console.log(reviews[i]);
    total2 += reviews[i];
}

console.log("Total = "+ total2);
console.log("Average= "+(total2/reviews.length));