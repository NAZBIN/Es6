function minErrorAnalysis(left,right){
	return Math.abs(left - right) < Number.EPSILON * Math.pow(2,2);
}

0.1 + 0.2 === 0.3  // false

minErrorAnalysis(0.1 + 0.2, 0.3)  //true

//argumen
function sortNumbers(){
	return Array.prototype.slice.call(arguments).sort();
}

const sortNumbers = (...numbers) => numbers.sort();


var result = values.sort(function(a,b){
	return a-b;
});

var result = values.sort((a,b) => a - b)