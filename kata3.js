function XO(str) {
	let arr = str.toLowerCase().split("");
	return arr.filter((element) => element == "x").length == arr.filter((element) => element == "o").length;
}
console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
