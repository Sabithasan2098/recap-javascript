function evenNumbersOnly(numbers) {
  let evensSum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      evensSum = evensSum + number;
    }
  }
  return evensSum;
}
const numbersOfArray = [
  5, 78, 8, 7, 87, 87, 8, 7, 87, 87, 8, 49, 87, 47, 98, 54, 654, 564, 65, 465,
  4, 6, 8, 6, 48, 7, 984, 68, 79, 7, 684,
];
const numbers = evenNumbersOnly(numbersOfArray);
console.log("The even numbers of array is", numbers);
