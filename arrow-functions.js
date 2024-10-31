/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let array3 = [2,4,6];
let array4 = array3;
array4.push(7);
console.log("third array", array3)


// Copying an array
let array1 = [2,4,6];
let array2 = [...array1];

array2.push(10);
console.log("first array", array1);
console.log("second array", array2);



// Copying an object

let obj1 = [12,34,65,59];
let obj2 = [...obj1, 20];
let obj3 = [...obj1, 16];

console.log("first object", obj1);
console.log("second object", obj2);
console.log("third object", obj3);

// Copying only part of an array/object

let array5 = [...array1, {...array2}, ...obj1, "z"];
console.log(array5);