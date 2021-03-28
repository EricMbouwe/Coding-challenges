function fibonacci(n) {
	const result = [];
	for (let i = 0; i < n; i++) {
		let term = fib(i);
		result.push(term);
	}
	return result;
}

function fib(i) {
	if (i === 0) return 0;
	if (i === 1) return 1;

	return fib(i - 1) + fib(i - 2);
}

const n = 5;
const result = fibonacci(n);
console.log(`The ${n} terms of the fibonacci sequence are`, result);
