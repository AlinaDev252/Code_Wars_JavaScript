function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
		return "Pls go away and stop eating my sheep";
	} else {
		let index = queue.findIndex((x) => x == "wolf");
		return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
	}
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
