function myFunction() {
    console.log("Welcome to learn JS!");
    console.log("We are learning functions");  // create function
}
myFunction();  // function calling

console.log("------------------------------");

function sum(x, y) {
    s = x + y;
    console.log("before return");
    return s;
    // console.log("After return"); 
}
let val = sum(3, 4);
console.log(val);

console.log("------------------------------");

// Arrow functions
let arrowMul = (a, b) => {
    return a * b;
}
val = arrowMul(5, 7);
console.log(val);
const printHello = () => console.log("hello!");

console.log("------------------------------");


