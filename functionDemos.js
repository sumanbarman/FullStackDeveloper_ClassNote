//Traditional Approach
function calInterest00(baseAmt, interestRate){
    return (baseAmt*interestRate)/100;
}
console.log(calInterest00(15000,10))


//Function as value
var calInterest01= function(baseAmt, interestRate){
    return (baseAmt*interestRate)/100;
}
console.log(calInterest01(15000,10))

//Fat Arrow with multiline
var calInterest02= (baseAmt, interestRate) => {
    return (baseAmt*interestRate)/100;
}
console.log(calInterest02(15000,10))

//Fat Arrow in single line
var calInterest03= (baseAmt, interestRate) => (baseAmt*interestRate)/100;
console.log(calInterest03(15000,10))