var Customer2 = /** @class */ (function () {
    function Customer2(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
var myCustomer = new Customer2("Shahinur", "Rahman");
myCustomer.firstName = "Ayesha";
myCustomer.lastName = "Warisha";
console.log("First name= " + myCustomer.firstName);
console.log("Last name= " + myCustomer.lastName);
