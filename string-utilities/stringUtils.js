//stringUtils.js Module: 
// ■ capitalize(str): Converts the first letter of a string to uppercase. 
// ■ reverse(str): Reverses the characters in a string. 
// ■ contains(str, substr): Checks if a substring exists within a string and returns true or false. 
// Ensure Reusability: 
// Design the module functions to handle edge cases, such as empty 
// strings or undefined inputs. 

 function testString(str) {
       if(typeof(str) !== "string" || str === "") {
             throw new Error ("Input is not a string, please retry");   
    }
  }

function capitalize(str) {
    try { 
        testString(str);
            return str.charAt(0).toUpperCase() + str.slice(1);
        } catch (err) {
            return err.message; 
    }
}

function reverse(str) {
    try {
        testString(str);
        } catch (err) {
            return err.message; 
    }
    if (str.length === 1 || str.length === 0) {
        return str;
    }
    let letter = str[str.length -1];
    let restOfWord = (str.slice(0,-1));
    return letter + reverse(restOfWord);
}

function contains(str, substr) {
    try { // this code is a bit more complex, not sure how to add testString function here. 
        if(typeof(str) !== "string" || str === "") {
            throw new Error ("Input is not a string, please retry");
            }
        if (str.includes(substr)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
            return err.message; 
    }
}

module.exports = {capitalize, reverse, contains};
