class Employee{

//Scenario 1 : Call a simple method inside the class

payroll(){
   console.log("emp payroll process");  
}

//Scenario 2 : Call a method by passing an argument using local variables
empDetails(emid:string){
    console.log(`The is of the emplyee ${emid} `)
}

//Scenario 3 : Call a method by passing the arguments and setting the values accesible globally using global variable declaration (public access modifier)

// public empName ="Hari"
// public empId ="emp567"

public empName : string 
public empId : string 


constructor(name:string, id : string){ // constructor method is the method that gets invoked first when you create an object
console.log("This is a deafult constructor");
this.empName= name // Dynamically assigning the values Hari , Ravi
this.empId= id // Dynamically assigning the values emp567 , emp890
}

printDetails(){    
    console.log(`GLobal employee details ${this.empName} : ${this.empId}`); // to access the properties declared globally we should use this keyword 
}
}



const emp = new Employee("Hari","emp567")// Object created --> the default constructor gets called first without being explicitely called
const emp1 = new Employee("Ravi","emp890") // Parameterized consdtructor
emp.payroll() // 2nd call
emp.empDetails("em23") // 3rd call
emp.empDetails("em24")

emp.printDetails()
emp1.printDetails()
