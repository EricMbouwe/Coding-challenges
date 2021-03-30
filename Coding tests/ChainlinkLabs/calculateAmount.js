function calculateAmount(prices) {
	let min = prices[0];

	return prices.reduce((acc, currVal) => {
		let discontedPrice = 0;

		if (currVal <= min) {
			acc += 0;
			min = currVal;
		} else {
			discontedPrice = currVal - min;
			acc += discontedPrice;
		}
		return acc;
	}, prices[0]);
}

const arr = [2, 5, 1, 4];
const arr1 = [3, 5, 2, 4, 1, 8];
const res = calculateAmount(arr);
console.log(res);

// console.log('currentval low', currVal);
// console.log('min is', min);
// console.log('acc is', acc);
// console.log('currentval hight', currVal);
// console.log('min is', min);
// console.log('acc is', acc);
