// Even number 0 to 100
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//         // even numbers
//         console.log("num =",num);
//     }
// }



let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while (userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again : ");
}
console.log("Congratulations, You entered the right number");