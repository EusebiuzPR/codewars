/* 

Task 

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/ 

/// My solution 


function removeEveryOther(arr){
  //your code here
  
  const nArr = [];
  for (let i = 0; i < arr.length;i++) {
    if (i % 2 == 0) {
      nArr.push(arr[i])
    }
  }
  return nArr;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6]));
console.log(removeEveryOther(["a", "b", "c", "d", "e"]));