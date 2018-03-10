function Employee(firstName, lastName, basicSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.basicSalary = basicSalary;
    this.totalSalary = 0;
}   

// Protsotype Start
Employee.prototype.emailId = "suman.barman@capgemini.com";

// fat Arrow Will not work. As this is not extended here. So value will be undefined
// Need to use traditional approach
//Employee.prototype.fullName = () => this.firstName + " " + this.lastName;

Employee.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
} 

// Protoype End


var employee01 = new Employee("Suman", "Barman", 10000);
console.log(employee01.firstName);
//Prototype -- Hidden Proterty
//Employee.prototype.fullName = () => employee01.firstName + " " + employee01.lastName;
console.log(employee01.emailId);
console.log(employee01.fullName());

var employee02 = new Employee("Irfan", "Saheed", 15000);
console.log(employee02.firstName);
//Prototype -- Hidden Proterty
//Employee.prototype.fullName = () => employee02.firstName + " " + employee02.lastName;
console.log(employee02.emailId);
console.log(employee02.fullName());
