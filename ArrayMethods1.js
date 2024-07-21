// forEach loop in arrays
let nums = [67, 52, 39];
let calcSquare = (nums) => {
    console.log(nums * nums);
}
nums.forEach(calcSquare);

console.log("-------------------------");

// Map
nums = [67, 52, 39, 50, 87];
let newArr = nums.map((val) => {
    return val * val;
});
console.log(newArr);

console.log("-------------------------");

// filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

console.log("-------------------------");

// reduce
arr = [1, 2, 3, 4];
let output = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(output);

arr = [5, 6, 2, 1, 101, 3];
output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);