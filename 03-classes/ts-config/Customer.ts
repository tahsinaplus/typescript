class Customer{

    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    private _salary: number;
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    constructor(first:string,last:string,sal:number){
        this._firstName=first;
        this._lastName=last;
        this._salary=sal;
    }
}

let cust = new Customer("aa","bb",1000);
cust.firstName = "Micheal";
cust.lastName= "Jakson";
cust.salary=8500;

console.log("Customer Name: "+cust.firstName+" "+cust.lastName+" and salary: "+cust.salary);