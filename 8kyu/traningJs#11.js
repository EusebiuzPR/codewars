/* 

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

*/


/// Description 


function grabDoll(dolls){
  var bag=[];
  //coding here
    for (let i = 0; i < dolls.length;i++) {
      
      
      if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
        bag.push(dolls[i])

      }
      else {
        continue;
      }
        if(bag.length === 3) {
          break;
        }
      
    }
  return bag;
}