function recursiveBinarySearch(target, arr) {
	if (arr.length === 0) {
		return false;
	} else {
		let middle = Math.floor(arr.length / 2);
		if (middle === target) {
			return true;
		} else if (middle < target) {
			return recursiveBinarySearch(target, arr.slice(middle + 1));
		} else {
			return recursiveBinarySearch(target, arr.slice(0, middle));
		}
	}
}

function verify(result) {
	console.log('Target found:', result);
}

const tab = [1, 2, 3, 7, 8, 9, 10];

const res1 = recursiveBinarySearch(7, tab);
const res2 = recursiveBinarySearch(12, tab);

verify(res1);
verify(res2);
