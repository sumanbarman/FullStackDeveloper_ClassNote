function Employee(firstName, lastName, basicSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.basicSalary = basicSalary;
    this.hra = 0;
    this.da = 0;
    this.ta = 0;
    this.totalsalary = 0;
    
    //Clouse Function
    this.calculateTotalSalary = () => {
        this.hra = this.basicSalary*10/100;
        this.ta = this.basicSalary*8/100;
        this.da = this.basicSalary*7/100;
        this.totalsalary = this.basicSalary + this.hra + this.ta + this.da;
        return this.totalsalary;
    }

    //Closure Function
    this.toString = () => this.firstName + " " + this.lastName + " " + this.basicSalary + " " + this.hra + " " + this.ta + " "  + this.da;
}

var employee01 = new Employee("Suman", "Barman", 10000);
console.log(employee01.toString());
console.log(employee01); // Before Calculation
employee01.calculateTotalSalary(); // Calculating
console.log(employee01); // After Calcualting
console.log(employee01.calculateTotalSalary()); // Only Salary
console.log(employee01.toString());

var employee02 = new Employee("Irfan", "Saheed", 15000);
console.log(employee02.toString());
console.log(employee02.calculateTotalSalary());