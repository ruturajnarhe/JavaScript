// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Ruturaj Narhe");
}
console.log("----------------------------");


let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);
console.log("----------------------------");



// infinite loop
// A loop that neber ends



// while loop
let i = 1;
while (i <= 5) {
    console.log("Ruturaj");
    i++;
}
console.log("----------------------------");



// do-while loop
i = 1;
do {
    console.log("i =",i);
    i++;
} while (i <= 5);
console.log("----------------------------");



// for-of loop
let str = "JavaScript";
let size = 0;
for (let val of str) {
    console.log("val =",val);
    size++;
}
console.log("----------------------------");
console.log("String size =",size);
console.log("----------------------------");



// for-in loop
let student = {
    name : "Ravindra Dhawan",
    age : 21, 
    cgpa : 8.41,
    isPass : true
};
for (let key in student) {
    console.log("key = ",key,",","value =",student[key]);
}
