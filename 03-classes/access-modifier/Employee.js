var Employee = /** @class */ (function () {
    function Employee(first, last, sal) {
        this._firstName = first;
        this._lastName = last;
        this._salary = sal;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee("ab", "b", 9000);
emp.firstName = "Shahinur";
emp.lastName = "Rahman";
emp.salary = 17500;
console.log(emp.firstName);
console.log(emp.lastName);
console.log(emp.salary);
