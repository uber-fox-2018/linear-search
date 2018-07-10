'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  for(let i = 0; i < values.length; i++) {
    if(values[i] === target) return i;
  }
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(random_numbers, 18, linearSearch(18, random_numbers));
// 2
console.log(random_numbers, 9, linearSearch(9, random_numbers));
// -1
console.log(random_numbers, 72, linearSearch(72, random_numbers));
// 4
console.log(random_numbers, 6, linearSearch(6, random_numbers));
// 0
console.log(random_numbers, 37, linearSearch(37, random_numbers));
//8

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  let result = [];
  for(let i = 0; i < values.length; i++) {
    if(values[i] === target) result.push(i);
  }

  return result;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(banana_arr, 'a', globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
console.log(banana_arr, 'n', globalLinearSearch("n", banana_arr));
// [2, 4]
console.log(banana_arr, 'b', globalLinearSearch("b", banana_arr));
// [1]
console.log(banana_arr, 'p', globalLinearSearch("p", banana_arr));
// []
console.log(banana_arr, 'A', globalLinearSearch("A", banana_arr));
// []
console.log(banana_arr, 'ba', globalLinearSearch("ba", banana_arr));
// []
module.exports = {
  linearSearch,
  globalLinearSearch
}
