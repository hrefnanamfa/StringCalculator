//calculator.js

function add(numbers) {
	if(numbers == "") //for empty string
		return 0;
	if(numbers.length == 1) //if only one number
		return parseInt(numbers);

	if(numbers[0] == "/" && numbers[1] == "/") { //for  given delimiter
		var delimiter = getDelimiter(numbers); // get delimiter
		var substr = numbers.substr(numbers.indexOf("\n") + 1); // get numbers in string
		var regex = new RegExp(delimiter, "g"); // make regular expression object to match text with delimiter ("g" to find all matches)
		numbers = substr.replace(regex, ","); // replace delimiter with ,
	}

	var numberArray = numbers.split(/[\n,]+/); // make array that splits on , or \n
	findNegatives(numberArray); // check  for negatives
	
	return sum(numberArray);
}

function getDelimiter(numbers) { //finds and returns delimiter in string
	var delimiter = "";
	var i = 2; // where delimiter starts
	while(numbers[i] != "\n"){ // while we are not where delimiter ends
		delimiter += numbers[i];
		i++;
	}
	return delimiter;
}

function findNegatives(numberArray) { //throws exception if array has a negative
	var negativeArray = [];
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) < 0){
			negativeArray.push(numberArray[i]);
		}
	}
	if(negativeArray.length > 0)
		throw new Error("Negatives not allowed: " + negativeArray.toString());
}

function sum(numberArray) { // returns sum of array
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) <= 1000) { // ignore numbers > 1000
			total += parseInt(numberArray[i]);
		}
	}
	return total;
}

module.exports = add;