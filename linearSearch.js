// Release 0
console.log("Linear Search")

var linearSearch = (target, values) => {
	var counter=0
	for (var i = 0 ; i < values.length ; i++){
		if (target === values[i]){
			counter++
		}
	}
	if(counter === 0){
		return -1
	}
	return counter
}

var random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")

var globalLinearSearch = (target, values) => {
	var valuesArr=[]
	for (var i = 0 ; i < values.length ; i++){
		if (target === values[i]){
			valuesArr.push(i)
		}
	}
	if(valuesArr.length === 0){
		return -1
	}
	return valuesArr
}

var banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
console.log(globalLinearSearch("z", banana_arr));
// -1

module.exports = {
  linearSearch,
  globalLinearSearch
}