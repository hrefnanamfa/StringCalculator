//calculator.js

function add(numbers) {
	if(numbers == "")
		return 0;

	if(numbers[0] == "/" && numbers[1] == "/"){
		var delimiter = "";
		var i = 2;
		while(numbers[i] != "\n"){
			delimiter += numbers[i];
			i++;
		}
		var substr = numbers.substr(numbers.indexOf("\n") + 1);
		var regex = new RegExp(delimiter, "g");
		numbers = substr.replace(regex, ",");
		numberArray = numbers.split(/[\n,]+/);

		findNegatives(numberArray);
		return sum(numberArray);
	}
	
	if(numbers.includes(",") || numbers.includes("\n")) {
		var numberArray = numbers.split(/[\n,]+/);
		
		findNegatives(numberArray);
		
		return sum(numberArray);
	}
	return parseInt(numbers);	
}

function findNegatives(numberArray) {
	var negativeArray = [];
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) < 0){
			negativeArray.push(numberArray[i]);
		}
	}
	if(negativeArray.length > 0)
		throw new Error("Negatives not allowed: " + negativeArray.toString());
}

function sum(numberArray) {
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) <= 1000) {
			total += parseInt(numberArray[i]);
		}
	}
	return total;
}

module.exports = add;