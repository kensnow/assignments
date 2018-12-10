/*
Employee Records
26 JANUARY 2016 on Programming Principles, Level 2, Exercise
You are to create a collection of employee's information for your company. Each employee has the following attributes:

Name
Job title
Salary
Status

*/

// First, you will create an array named employees

var employeeNames = ["Tim Burton", "Stormy Daniels", "Pink Panther"]

// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be 
// defaulted to "Full Time".
// This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
// (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

function Employee(name,jobtitle, salary){
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = "Full Time";
   
}

Employee.prototype.print = print

function print(){
    console.log("Name: " + this.name + "\nJob Title: " + this.jobtitle + "\nSalary: " + this.salary + "\nStatus: " + this.status)
    // console.log(this)
}
// Instantiate three employees
var bobBarker = new Employee("Bob Barker", "Host", 4500000)
var happyGilmore = new Employee("Happy Gilmore", "Not a golfer", 100000)
var chrisRobbin= new Employee("Christopher Robin", "Lost Child", 150)
//Override the status attribute of one of them to either "Part Time" or "Contract"

happyGilmore.status = "Contractor"


// Call the printEmployeeForm method for each employee
happyGilmore.print()
bobBarker.print()
chrisRobbin.print()
// Put the generated employees into the employees array using whichever method you prefer.

var newEEs = ["Bob Barker", "Happy Gilmore", "Christopher Robin"]
for (i = 0; i < newEEs.length; i++){

    employeeNames.push(newEEs[i])
}
console.log(employeeNames)