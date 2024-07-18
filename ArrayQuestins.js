// Q) create an array to store componies : 
let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// remove first compony from the array
arr.shift();
console.log(arr);

// remove Uber and add Ola in its place
arr.splice(1, 1, "Ola");
console.log(arr);

// add Amazon at the end
arr.push("Amazon");
console.log(arr);




// Q) Average of marks
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);


// Q) Apply offers to the items
let items = [250, 645, 300, 900, 50];

let i = 0;
// for-of loop
for (let val of items) {
    let offers = val / 10;
    items[i] = items[i] - offers;
    console.log(`value after offer = ${items[i]}`);
    i++;
}
// for loop
for (let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);