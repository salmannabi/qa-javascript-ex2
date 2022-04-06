// FizzBuzz
// for(let i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// FizzBuzz using ternary statement
console.log("FizzBuzz using ternary if/else statement");
for (let i = 0; i <= 100; i++) {
    i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") : fizzOrBuzzCheck(i);
}

function fizzOrBuzzCheck(i) {
    i % 3 == 0 ? console.log("Fizz") : buzzCheck(i);
}

function buzzCheck(i) {
    i % 5 == 0 ? console.log("Buzz") : console.log(i);
}

// Excercise Scope
function doSomething() {
    // console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
}
doSomething();

