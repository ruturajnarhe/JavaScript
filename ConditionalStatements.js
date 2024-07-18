// if Statements 
let age = 25;

if (age >= 18) {
    console.log("You can vote");
}
if (age < 18) {
    console.log("You cannote vote");
}


// if-else statements
let mode = "light";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white"
}
console.log(color);


// else-if statements
age = 65;
if (age < 18) {
    console.log("junior");
} else if (age > 60) {
    console.log("senior");
} else {
    console.log("middle");
}