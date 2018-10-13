//calculator.js

function add(number) {
	if(number == "")
		return 0;

	if(number[0] == "/" && number[1] == "/"){
		var delimiter = "";
		var i = 2;
		while(number[i] != "\n"){
			delimiter += number[i];
			i++;
		}
		var substr = number.substr(number.indexOf("\n") + 1);
		var regex = new RegExp(delimiter, "g");
		number = substr.replace(regex, ",");
		numberArray = number.split(/[\n,]+/);

		findNegatives(numberArray);
		return sum(numberArray);
	}
	
	if(number.includes(",") || number.includes("\n")) {
		var numberArray = number.split(/[\n,]+/);
		
		findNegatives(numberArray);
		
		return sum(numberArray);
	}
	return parseInt(number);	
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