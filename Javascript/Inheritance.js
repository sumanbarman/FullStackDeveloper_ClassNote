function Employee(firstName, lastName, basicSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.basicSalary = basicSalary;
    this.totalsalary = 0;
    
    //Clouse Function
    this.fullName = () => this.firstName + " " + this.lastName;
    //Clouse Function
    this.calculateTotalSalary = () => {
        this.totalsalary = this.basicSalary;
        return this.totalsalary;
    }
}

Employee.prototype.emailId = "suman.barman@capgemini.com";
var employee01 = new Employee("Suman", "Barman", 10000);
employee01.calculateTotalSalary();
console.log(employee01.emailId);
console.log(employee01);

function Pemployee(firstName, lastName, basicSalary){
    this.hra = 0;
    this.da = 0;
    this.ta = 0;
    Employee.call(this, firstName,lastName, basicSalary); // Extends Employee Function
    
    this.fullName = () => this.firstName + " " + this.lastName;
    //Clouse Function
    this.calculateTotalSalary = function(){
        this.hra = this.basicSalary*10/100;
        this.ta = this.basicSalary*8/100;
        this.da = this.basicSalary*7/100;
        this.totalsalary = this.basicSalary + this.hra + this.ta + this.da;
        return this.totalsalary;
    }
}

Pemployee.prototype.emailId = "suman.barman@gmail.com";
var pemployee01 = new Pemployee("Suman1", "Barman", 10000);
pemployee01.calculateTotalSalary();
console.log(pemployee01);
console.log(pemployee01);
console.log(pemployee01.fullName());