// Description: 
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replaceAll("!", '');
}

// Example usage: 
console.log(removeExclamationMarks("Hello World!")); 
console.log(removeExclamationMarks("!!!"));  

