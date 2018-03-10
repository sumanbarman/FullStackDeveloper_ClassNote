var numlist = [10,20,30,40,50,60,70,80,90];
var list = [10,20,'Suman Barman', 992];

//Traditional Approach
for(var i=0; i<numlist.length; i++){
    console.log(numlist[i]);
}

// For In feature
for(let a in numlist){
    console.log(numlist[a]);
}

//Fat Arrow - Multi Line
numlist.forEach(element=>{
    console.log(element);
})

//Fat Arrow in Single line
numlist.forEach(element=>console.log(element));