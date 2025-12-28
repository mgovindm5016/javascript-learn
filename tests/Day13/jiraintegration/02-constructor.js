var Employee = /** @class */ (function () {
    function Employee(name, id) {
        console.log("This is a deafult constructor");
        this.empName = name; // Dynamically assigning the values Hari , Ravi
        this.empId = id; // Dynamically assigning the values emp567 , emp890
    }
    //Scenario 1 : Call a simple method inside the class
    Employee.prototype.payroll = function () {
        console.log("emp payroll process");
    };
    //Scenario 2 : Call a method by passing an argument using local variables
    Employee.prototype.empDetails = function (emid) {
        console.log("The is of the emplyee ".concat(emid, " "));
    };
    Employee.prototype.printDetails = function () {
        console.log("GLobal employee details ".concat(this.empName, " : ").concat(this.empId)); // to access the properties declared globally we should use this keyword 
    };
    return Employee;
}());
var emp = new Employee("Hari", "emp567"); // Object created --> the default constructor gets called first without being explicitely called
var emp1 = new Employee("Ravi", "emp890"); // Parameterized consdtructor
emp.payroll(); // 2nd call
emp.empDetails("em23"); // 3rd call
emp.empDetails("em24");
emp.printDetails();
emp1.printDetails();
