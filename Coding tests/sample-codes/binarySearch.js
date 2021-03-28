function binarySearch(target, arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (target === arr[middle]) {
			return middle;
		} else if (target > arr[middle]) {
			start = middle + 1;
		} else if (target < arr[middle]) {
			end = middle - 1;
		}
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

const tab = [1, 2, 3, 7, 8, 9, 10];

const res1 = binarySearch(7, tab)
const res2 = binarySearch(12, tab)

verify(res1);
verify(res2);
