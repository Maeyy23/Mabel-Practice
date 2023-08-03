/// write a function that adds 3 variable with a call back function
()=>{}
function callBack (a, b, c, innerFunction){
    return innerFunction(a, b, c);
}

function innerFunc(var1, var2, var3){
    return var1 + var2 + var3;
}
const a = 12;
const b = 24;
const c = 2;

console.log(callBack(a, b, c, innerFunc))

//callBack(a, b, c, function(a, b, c){return a+b+c}) this is another way to call this function

array1 = [
    {
    id: 0,
    name: "mabel"
    },
    {
        id: 1,
        name: "sharon"
    },
    {
        id: 2,
        name: "sasha"
    }
]
// using forEach forloop
array1.forEach((obj) => {
    console.log(obj)
});

// using a for loop
for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

// .map is used to return an new array
const array2 = array1.map((r)=>{
    return {id: r.id};
});
console.log(array2);


// assignment.Question 1 write a for loop from 0-100.
// if it is divsible by 3, console log "do"
// if it is divisible by 5, console log "foo"
// if it is divisible by 3 and 5, console log "doo foo"
// and if not divisible by any, console log the value
// hint 3%2 === 0, also read on if, else if and else

for (let i = 0; i < 100; i++){
    if( ( i % 3 === 0) &&  (i % 5 === 0)){
        console.log("doo foo");
        
    } else if ( i % 5 === 0){
        console.log("foo");
    }
    else if( i % 3 === 0){
        console.log("do");
    } else 
        console.log(i);
}

// Question 2, using a loop, console.log multiples of 2 until 12

for (let i = 0; i<=12; i++){
    if (i % 2 ===0){
        console.log(i);
    }
}


// Question 3, using a loop, console.log factorial of 20

var x = 20;
var factorial = 1;

for (let i = x; i > 0; i--){
    factorial *= i;
}
console.log(factorial)

// JS Closures. Nested function
function greet(name){
    function displayName(){
        console.log("Hi " + name);
    }
    displayName();
}
greet("Baby");

// Returning a function
function greet(name){
    function displayName(){
        console.log("Hi " + name);
    }
    return displayName;
}
const g1 = greet("Joy");
// console.log(g1); // this is not necesarry.
g1(); 

/* Write a function called add
This function takes in parameters in this format (5) (6) (8)
Result should be returned as 11 */


function add(a) {
    return function (b) {
        console.log(a + b);
    }
}
add (5) (6) 

// if you take it a step further with a c
function add(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c);
        }
    }
}
add (5) (6) (8);

// the above is also called an anonymous function - a function without a name
/* IIFEs are called Immediately Invoked Function Expressions */

(function name(){
    console.log("I am an IIFE....");
})();

(function add(a) {
    return function (b) {
        console.log(a + b);
        }
    }
)(5)(12);
