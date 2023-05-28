class Customer2{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirstName:string,theLastName:string){
        this._firstName=theFirstName;
        this._lastName=theLastName;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public set lastName(value:string){
        this._lastName = value;
    }
}

let myCustomer = new Customer2("Shahinur","Rahman");
myCustomer.firstName = "Ayesha";
myCustomer.lastName = "Warisha";
console.log("First name= "+myCustomer.firstName);
console.log("Last name= "+myCustomer.lastName);