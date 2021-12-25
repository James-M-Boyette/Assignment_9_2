// Calculator App (My attempt)

// Attempt 1: Create an outer "calculator" function, with inner mathematical functions
// Result(s): Cannot call innter fucntions due to "closure"
// function calculator(input) {
//     const addition = function (number1) {
//         console.log(number1);
//         // console.log(typeOf number1);
//     };

// }
// console.log(calculator(addition(5)));

// Attempt 2: Create outer functios of each mathematical function
// Result(s): 
function addition(input1, input2) {
    console.log(`This is input1: ${input1}`);
    console.log(`This is input1: ${input2}`);
    // console.log(typeof input);

    // result = (input1.parseInt + input2.parseInt);
    result = input1 + input2;

    return result
}
console.log(addition(5, 6));

// function addition(input) {
//     console.log(input);
//     console.log(typeof input);
//     return input
// }
// console.log(addition(5));