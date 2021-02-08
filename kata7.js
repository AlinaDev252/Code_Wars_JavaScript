function dbSort(a) {
	let word = a.filter((v) => typeof v == "string").sort();
	let number = a.filter((v) => typeof v == "number").sort((a, b) => a - b);
	return number.concat(word);
}

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort([14, 32, 3, 5, 5]));
console.log(dbSort([1, 2, 3, 4, 5]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]));