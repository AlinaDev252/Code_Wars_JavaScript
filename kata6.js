function hero(bullets, dragons) {
	return dragons * 2 <= bullets;
}

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1057, 751));
console.log(hero(0, 1));
