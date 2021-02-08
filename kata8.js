function equableTriangle(a, b, c) {
	let p = (a + b + c) / 2;
	let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
	return p * 2 === area;
}

console.log(equableTriangle(5, 12, 13));
console.log(equableTriangle(2, 3, 4));
console.log(equableTriangle(6, 8, 10));
console.log(equableTriangle(7, 15, 20));
console.log(equableTriangle(17, 17, 30));
console.log(equableTriangle(7, 10, 12));
console.log(equableTriangle(6, 11, 12));
console.log(equableTriangle(25, 25, 45));
console.log(equableTriangle(13, 37, 30));
console.log(equableTriangle(6, 25, 29));
console.log(equableTriangle(10, 11, 18));
console.log(equableTriangle(73, 9, 80));
console.log(equableTriangle(12, 35, 37));
console.log(equableTriangle(120, 109, 13));
console.log(equableTriangle(9, 10, 17));
