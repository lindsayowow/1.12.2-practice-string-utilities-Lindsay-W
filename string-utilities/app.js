// Import the stringUtils.js module into app.js. 
// ○ Test each function with different string inputs and log the results to the console.
// Design the module functions to handle edge cases, such as empty 
// strings or undefined inputs.

const stringUtils = require('./stringUtils.js');

function testOutput(str, substr1, substr2) {
console.log(`Testing using the input: ${str}`);
console.log(`Input with initial capital letter:  ${stringUtils.capitalize(str)}`); 
console.log(`Input in reverse order:  ${stringUtils.reverse(str)}`); 
console.log(`Checking whether ${substr1} is in ${str}:  ${stringUtils.contains(str,substr1)}`); 
console.log(`Checking whether ${substr2} is in ${str}:  ${stringUtils.contains(str,substr2)} \n`); 
}

//expected outcomes: 
testOutput("hello","ell","hi"); // returns Hello, olleh, true, false
testOutput("lindsay", "Linds", "linds"); // returns Lindsay, yasdnil, false(capital letter), true

//testing input that is not a string - all return expected error message x4
testOutput(42,5,2); 
testOutput(true, true, false); 
testOutput();
testOutput("","","");
testOutput("","test","no");
