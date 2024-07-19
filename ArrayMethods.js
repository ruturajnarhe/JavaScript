// 1) Push(): Add to end
let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);

console.log("------------------------------------");

// 2) pop() : delete from end & return
foodItems = ["potato", "apple", "litchi", "tomato"];
console.log(foodItems);
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted",deletedItems);

console.log("------------------------------------");

// 3) toString() : convert array to string
foodItems = ["potato", "apple", "litchi", "tomato"];
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);

console.log("------------------------------------");

// 4) concat() joins multiple arrays & returns result
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);

console.log("------------------------------------");

// 5) unshift() : add to start
marvelHeroes = ["thor", "spiderman", "ironman"];
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

console.log("------------------------------------");

// 6) shift() : remove the first element
marvelHeroes = ["thor", "spiderman", "ironman"];
let val = marvelHeroes.shift();
console.log("deleted",val);
console.log(marvelHeroes);

console.log("------------------------------------");

