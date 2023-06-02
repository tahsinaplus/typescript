var Customer = /** @class */ (function () {
    function Customer(first, last, sal) {
        this._firstName = first;
        this._lastName = last;
        this._salary = sal;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var cust = new Customer("aa", "bb", 1000);
cust.firstName = "Micheal";
cust.lastName = "Jakson";
cust.salary = 8500;
console.log("Customer Name: " + cust.firstName + " " + cust.lastName + " and salary: " + cust.salary);
