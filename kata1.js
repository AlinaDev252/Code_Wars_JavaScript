function friend(friends) {
	let friendGroup = [];
	for (i = 0; i < friends.length; i++) {
		if (friends[i].length === 4) {
			friendGroup.push(friends[i]);
		}
	}
	return friendGroup;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])));
console.log(friend(["Love", "Your", "Face", "1"]));
