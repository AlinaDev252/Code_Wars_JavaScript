function summy(stringOfInts) {
	return stringOfInts.split(" ").reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
}

console.log(summy("1 2 3"));
console.log(summy("1 2 3 4"));
console.log(summy("1 2 3 4 5"));
console.log(summy("10 10"));
console.log(summy("0 0"));
