"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var _01_accessModifiers_1 = require("./01-accessModifiers");
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        var _this = _super.call(this) || this;
        _this.employeeDepartment = "Human Resources";
        (0, console_1.log)("HR Department by using super constructor: ".concat(_this.employeeDepartment));
        return _this;
    }
    //Now we can access the protected member 'employeeName' here
    HR.prototype.updateEmployeeName = function (newName) {
        this.employeeName = newName;
    };
    HR.prototype.printEmployeeName = function () {
        console.log("Employee Name (from HR class): ".concat(this.employeeName));
    };
    return HR;
}(_01_accessModifiers_1.EmployeeDetails));
var employee = new HR();
employee.printDetails(); // Accessing public method from parent class
// Accessing and modifying protected member through subclass methods
employee.printEmployeeName(); // Print original name
employee.updateEmployeeName("Alice Johnson"); // Update name
employee.printEmployeeName(); // Print updated name
