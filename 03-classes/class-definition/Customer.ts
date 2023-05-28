class Customer{
    firstName: string;
    lastName: string;

    constructor(theFirstName:string,theLastName:string){
        this.firstName=theFirstName;
        this.lastName=theLastName;
    }
}

let customer = new Customer("Shahinur","Rahman");
console.log("First name= "+customer.firstName);
console.log("Last name= "+customer.lastName);