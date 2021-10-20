// What is a function
/*
This is simply a way to repackage  functionaliity in a way we may 
want to use in other places
*/
//  myFunction is the name you want to give a function
//  params is simply a variable the you want to use in your function
function myFunction(param1,param2) {
    // functionality we want to reuse 
    let myNumber=param1+param2
    console.log( myNumber)  
}
// function call to be able to use the function
myFunction(1,2)

function addnumber(num1,num2) {
    
    let sum=num1+num2;
    return sum;
}
let total_sum =50 + addnumber(1,2)

console.log(total_sum);