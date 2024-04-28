function sumOfArray(numbers) {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }
  return total;
}
const numbers = [
  5, 78, 8, 7, 87, 87, 8, 7, 87, 87, 8, 49, 87, 47, 98, 54, 654, 564, 65, 465,
  4, 6, 8, 6, 48, 7, 984, 68, 79, 7, 684,
];
const sum = sumOfArray(numbers);
console.log("The sum of the array is", sum);
