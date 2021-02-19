function fizzbuzz(n) {
	return Array.apply(null, new Array(n)).map(function (e, i) {
		return (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i;
	});
}

console.log(JSON.stringify(fizzbuzz(3)));
