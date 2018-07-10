// Release 0 : Basic linear search
function linearSearch(num, random_numbers){

  for(let i = 0; i < random_numbers.length; i++){
    if(num === random_numbers[i]){
      return i
    } 
  }
  return -1
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37]
console.log(linearSearch(18, random_numbers))
console.log(linearSearch(9, random_numbers))


// Release 1 : Global linear search
function globalLinearSearch(letter, word){

  let result = []

  for(let i = 0; i < word.length; i++){
    if(letter === word[i]){
      result.push(i)
    }
  }
  
  return result

}

let banana_arr = "banana".split("")
console.log(globalLinearSearch("a", banana_arr))