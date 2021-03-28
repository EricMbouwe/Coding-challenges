function linearSearch(target, arr) {
	//returns the index of the target if found, else returns null
	for (let i = 0; i < arr.length; i++) {
		if (target === arr[i]) return i;
	}
	return null;
}

function verify(index) {
	if (index) {
		console.log('Target found at:', index);
	} else {
		console.log('Target not found in list');
	}
}

const tab = [1, 7, 9, 6, 8, 10];
const res1 = linearSearch(9, tab);
const res2 = linearSearch(12, tab);

verify(res1);
verify(res2);
