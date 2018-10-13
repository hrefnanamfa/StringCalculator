//calculator.js

function add(number) {
	if(number == "")
		return 0;
	
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
		total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;