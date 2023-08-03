//A function that gets the youngest person in the class using a loop

let groupInterns = [
    {name:"Dumebi", age:25, gender:"Female"},
    {name:"Dayo", age:45, gender:"Male"},
    {name:"Mabel", age:19, gender:"Female"},
    {name:"Emmanuel", age:35, gender:"Male"},
    {name:"David", age:23, gender:"Male"},
    {name:"Joy", age:27, gender:"Female"},
    {name:"Peace",age: 15, gender:"Female"}
]

function getYoungestPersonInClass(){
    let youngestAge = Number.POSITIVE_INFINITY;
    let j = 0;
    //iterate or loop through the list
    for(let i=0; i < groupInterns.length; i++){
        let ageList = groupInterns[i].age
        if(ageList < youngestAge){
            youngestAge = ageList;
            j = i;
        }
    }
    //store the current age
    //compare age
    //if condition is true update youngest age
    //at the end of the loop, return the youngest age
   // return groupInterns[j]; // to return the person with the youngest age
    return youngestAge;
    



}
//console.log(groupInterns)
console.log(getYoungestPersonInClass())

//function to get the youngest person by gender

let groupInterns2 = [
        {name:"Dumebi", age:25, gender:"Female"},
        {name:"Dayo", age:45, gender:"Male"},
        {name:"Mabel", age:19, gender:"Female"},
        {name:"Emmanuel", age:35, gender:"Male"},
        {name:"David", age:23, gender:"Male"},
        {name:"Joy", age:27, gender:"Female"},
        {name:"Peace",age: 15, gender:"Female"}
    ]
function getYoungestPersonInClass(groupInterns){
    //let youngestAge = Number.POSITIVE_INFINITY;
    let youngestMale = Number.POSITIVE_INFINITY;
    let youngestFemale = Number.POSITIVE_INFINITY;
    let maleIndex = 0, femaleIndex = 0;
    
    //iterate or loop through the list
    for(let i=0; i < groupInterns.length; i++){
        let currentAge = groupInterns[i].age;
        if(groupInterns[i].gender == "Female" && currentAge < youngestFemale){
            youngestFemale = currentAge;
            femaleIndex = i;
        }

        if(groupInterns[i].gender == "Male" && currentAge < youngestMale){
            youngestMale = currentAge;
//             maleIndex = i;
//         }
//     }
//     return {
//         "male": groupInterns[maleIndex],
//         "female": groupInterns[femaleIndex]
//     }
// }
// console.log(getYoungestPersonInClass())

var x = 10
var factorial = 1;

for (let i = x; i > 0; i--){
    factorial *= i;
}

console.log(factorial)

let groupInterns = [
    {name:"Dumebi", age:25, gender:"Female"},
    {name:"Dayo", age:45, gender:"Male"},
    {name:"Mabel", age:19, gender:"Female"},
    {name:"Emmanuel", age:35, gender:"Male"},
    {name:"David", age:23, gender:"Male"},
    {name:"Joy", age:27, gender:"Female"},
    {name:"Peace",age: 15, gender:"Female"}
]

for (let intern in groupInterns){
    console.log(groupInterns[intern].age)
}

// function constructor - anonymous functions
let func = new Function("x", "y", "return x*y;");
console.log(func(7,9));

// to add to an array, use the .push()
let tapNames = ["mabel", "joy", "grace","peace", "josh", "sam", "ruki", "joe", "ken","emmanuel","emmy", "eric","josh"];
//tapNames.push("esther")

// console.log(tapNames)

// to remove the last element from an array, use .pop()
// tapNames.pop()
// console.log(tapNames)

// to replace an array
// tapNames[0] = "Emmanuel"
// console.log(tapNames)


for(let i=0; i<tapNames.length; i++){
    if (tapNames[i] === "ken"){
        tapNames[i] = "paul"}
        //{console.log("The Index of Ken is ", [i]);
        //break;
        //the tapNames[i] = "paul" is used to replace a data in a large set
    }
console.log(tapNames)

const shopping_list = [["chocolate", "coffee", "milk"], ["toothpaste", "detergents", "hypo"], ["four cousins", "coke", "caprisone"]]
console.log(shopping_list[1][1])

//making an array of objects
marketList = [
    {
        groupName: "Beverages",
        items: ["chocolate", "coffee", "milk"]
    },
    {
        groupName: "Toileteries",
        items: ["toothpaste", "detergents", "hypo"]
    },
    {
        groupName: "Drinks",
        items: ["four cousins", "coke", "caprisone"]
    }
]
console.log(marketList[2].items[1])
//to duplicate, use the shift, alt, down-arrow-key