const longest = (s1, s2) => {
	// your code
	// Create Arrays x and y containing unique values by making them Set and converting them back to array.
	let x = [...new Set(s1.split(""))];
	let y = [...new Set(s2.split(""))];

	// Combine both arrays into one
	for (let i = 0; i < y.length; i++) {
		x.push(y[i]);
	}

	// Create a unique array from the combination
	let newArray = [...new Set(x)];

	// Sort newArray and join to form a string
	let sortedString = newArray.sort().join("");
	return sortedString;
};

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
