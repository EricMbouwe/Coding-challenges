function fizzbuzz(num) {
  for (var i = 1; i<=num; i++) {
    var output = '';
    if (i%3 == 0) { output += 'Fizz'; }
    if (i%5 == 0) { output += 'Buzz'; }
    if (output == '') { output = i; }
    console.log(output);
  }
}

console.log(fizzbuzz(100));