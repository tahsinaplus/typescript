// normal variable declaration
var empNumber: number = 1;
var empName: string = "Micheal Anderson";

// Tuple declaration
var emp :[number, string] = [1, "Micheal Anderson"];
var person : [number,boolean,string,number] = [1,true,"Micheal",9000];

emp.push(2,"Shahinur");
emp.push(3,"Rahman");

console.log(emp);

emp.concat("Tahsin");
console.log(emp[1]);
console.log(person[1]);
//emp[2] = emp[2].concat("Tahsin");
