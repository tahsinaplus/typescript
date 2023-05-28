console.log("Number Array and calculation");

let num: number[] = [5,10,15,20,25];

console.log("Printing Number Array------");
let total:number=0;

for(let i = 0; i<num.length;i++){

    //total += numb[i];
    console.log(num[i]);
    total +=num[i];
}
console.log("Total number= "+total);