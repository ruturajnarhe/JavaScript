// String
let str = "Ruturaj Narhe";
console.log(str);
console.log(str.length);



// Template literals is a special type of string, String Interpolation
let obj = {
    item : "Pen",
    price : 10,
};
let output = `the cost of ${obj.item} is ${obj.price} ripees`;
console.log(output);



// \ n=> new line, \t => tab space



// String methods in JS 
// 1) toUpperCase();
str = "Ruturaj Narhe";
str = str.toUpperCase();
console.log(str);

// 2) toLowerCase();
str = "Ruturaj Narhe";
str = str.toLowerCase();
console.log(str);

// 3) trim();
str = "    Ruturaj   Narhe  js     ";
console.log(str.trim());

// 4) slice(start, end?);   return part of string
str = "012345678";
console.log(str.slice(1, 5));

// 5) str1.concat(str2);   joins string
let str1 = "Ruturaj";
let str2 = "Narhe";
let res = str1.concat(str2);
console.log(res);

// 6) replace(searchVal, newVal);
str = "hello";
console.log(str.replace("h", "m"));

// 7) charAt();
str = "ILoveJS";
console.log(str.charAt(3));
