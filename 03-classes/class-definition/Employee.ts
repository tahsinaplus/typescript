class Employee{

    employeeFirstName: string;
    employeeLastName: string;
    salary: number;

    constructor(first:string,last:string,sal:number){
        this.employeeFirstName = first;
        this.employeeLastName = last;
        this.salary = sal;
    }
}

// class initialization
let emp = new Employee("Shahinur","Rahman",8500);
console.log(emp.employeeFirstName+" "+emp.employeeLastName+" salary is "+emp.salary);