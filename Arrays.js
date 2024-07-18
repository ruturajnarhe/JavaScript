// create arrays

let heroes = ["ironman", "hulk", "thor", "batman"];
console.log(heroes);

let marks = [96, 75, 48, 83, 66];
console.log(marks);

let info = ["Ruturaj", 96, "Pune"];

// looping over an Array
heroes = ["ironman", "hulk", "thor", "batman"];
// for loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }
// for-of loop
for (let hero of heroes) {
    console.log(hero);
}