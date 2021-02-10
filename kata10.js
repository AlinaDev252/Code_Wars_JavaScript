function solve(str) {
	const arr = [...str.split(` `).join(``)];
	return str.replace(/\S/g, (a) => arr.pop());
}

console.log(solve("codewars"));
console.log(solve("your code"));
console.log(solve("i love codewars"));
