// function howManyHundreds(number) {
//   if (number < 100) {
//     console.log(0)
//   } else if (number > 100) {
//     console.log(math.floor(number % 100))
//   }

// }

// console.log(howManyHundreds(1000)
// console.log(howManyHundreds(99)


function howManyHundreds(number) {
  var calculatedRemainder = number % 100;
  var minusRemainder = (number - calculatedRemainder) / 100;
  return minusRemainder;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);