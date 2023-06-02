var Employee = /** @class */ (function () {
    function Employee(first, last, sal) {
        this.employeeFirstName = first;
        this.employeeLastName = last;
        this.salary = sal;
    }
    return Employee;
}());
// class initialization
var emp = new Employee("Shahinur", "Rahman", 8500);
console.log(emp.employeeFirstName + " " + emp.employeeLastName + " salary is " + emp.salary);
