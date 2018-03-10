var numlist = [10,20,30,40,50,60,70,80,90];
var list = [10,20,'Suman Barman', 992];

for(var i=0; i<numlist.length; i++){
    console.log(numlist[i]);
}

for(let a in numlist){
    console.log(numlist[a]);
}

//Similar to Lamda
numlist.forEach(element=>{
    console.log(element);
})