import { log } from "console";
import { EmployeeDetails } from "./01-accessModifiers";

class HR extends EmployeeDetails {

    constructor() {
        super();
        this.employeeDepartment = "Human Resources";
        log(`HR Department by using super constructor: ${this.employeeDepartment}`);
    }

    //Now we can access the protected member 'employeeName' here
    updateEmployeeName(newName: string) {
        this.employeeName = newName;
    }

    printEmployeeName() {
        console.log(`Employee Name (from HR class): ${this.employeeName}`);
    }
}

let employee = new HR();
employee.printDetails(); // Accessing public method from parent class

// Accessing and modifying protected member through subclass methods
employee.printEmployeeName(); // Print original name
employee.updateEmployeeName("Alice Johnson"); // Update name
employee.printEmployeeName(); // Print updated name

