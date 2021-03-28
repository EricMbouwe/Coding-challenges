const getOdds = arr => arr.filter(num => num % 2 !== 0);

const tab = [1, 5, 7, 8, 89, 10];

console.log('Odds:', getOdds(tab));

function countDown(fromNumber) {
  console.log('😀', fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    setTimeout(() => {
      countDown(nextNumber);
    }, 1000);
  }
}

countDown(15);
