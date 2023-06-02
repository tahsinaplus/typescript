class Employee {
    private _firstName: string;    
    private _lastName: string;    
    private _salary: number;    

    constructor(first: string, last: string, sal: number) {
        this._firstName = first;
        this._lastName = last;
        this._salary = sal;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
}

let emp = new Employee("ab","b",9000);
emp.firstName = "Shahinur";
emp.lastName="Rahman";
emp.salary=17500;
console.log(emp.firstName);
console.log(emp.lastName);
console.log(emp.salary);