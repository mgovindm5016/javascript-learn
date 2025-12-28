export class EmployeeDetails {
  private static employeeID: number;
  protected  employeeName: String;
  public employeeDepartment: String;
  private employeeSalary: number;

  constructor() {
    this.employeeName = `Jane Smith`;
    this.employeeDepartment = `Operations`;
    this.employeeSalary = 309000;
    EmployeeDetails.employeeID = 5678;
  }

  printDetails() {
    console.log(`Employee ID from Base Class: ${EmployeeDetails.employeeID}`); // static member accessed using class name
    console.log(`Employee Name from Base Class: ${this.employeeName}`);
    console.log(`Employee Department from Base Class: ${this.employeeDepartment}`);
    console.log(`Employee Salary: ${this.employeeSalary}`);
  }

  public get getEmployeSalary() {
    return this.employeeSalary;
  }

  public set setEmployeeSalary(salary: number) {
    this.employeeSalary = salary;
  }
}

const emp = new EmployeeDetails();
emp.printDetails();
// emp.employeeName = "John Doe"; // Error: 'employeeName' is protected and only accessible within class 'EmployeeDetails' and its subclasses.
// emp.employeeSalary = 400000; // Error: 'employeeSalary' is private and only accessible within class 'EmployeeDetails'.

console.log(`Employee Salary (using getter): ${emp.getEmployeSalary}`);

emp.setEmployeeSalary = 350000;
console.log(`Updated Employee Salary (using getter): ${emp.getEmployeSalary}`);
