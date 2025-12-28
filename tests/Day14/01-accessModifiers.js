"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDetails = void 0;
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails() {
        this.employeeName = "Jane Smith";
        this.employeeDepartment = "Operations";
        this.employeeSalary = 309000;
        EmployeeDetails.employeeID = 5678;
    }
    EmployeeDetails.prototype.printDetails = function () {
        console.log("Employee ID from Base Class: ".concat(EmployeeDetails.employeeID)); // static member accessed using class name
        console.log("Employee Name from Base Class: ".concat(this.employeeName));
        console.log("Employee Department from Base Class: ".concat(this.employeeDepartment));
        console.log("Employee Salary: ".concat(this.employeeSalary));
    };
    Object.defineProperty(EmployeeDetails.prototype, "getEmployeSalary", {
        get: function () {
            return this.employeeSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeDetails.prototype, "setEmployeeSalary", {
        set: function (salary) {
            this.employeeSalary = salary;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
var emp = new EmployeeDetails();
emp.printDetails();
// emp.employeeName = "John Doe"; // Error: 'employeeName' is protected and only accessible within class 'EmployeeDetails' and its subclasses.
// emp.employeeSalary = 400000; // Error: 'employeeSalary' is private and only accessible within class 'EmployeeDetails'.
console.log("Employee Salary (using getter): ".concat(emp.getEmployeSalary));
emp.setEmployeeSalary = 350000;
console.log("Updated Employee Salary (using getter): ".concat(emp.getEmployeSalary));
