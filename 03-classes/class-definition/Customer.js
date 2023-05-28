var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var customer = new Customer("Shahinur", "Rahman");
console.log("First name= " + customer.firstName);
console.log("Last name= " + customer.lastName);
