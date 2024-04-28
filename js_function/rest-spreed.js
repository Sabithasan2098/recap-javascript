//example for spreed operator----->
const sabit = [1, 2, 3, 4, 5];
const saiful = [...sabit];
saiful.push(6);
// console.log(sabit);
// console.log(saiful);

//example for rest operator------->
const addNumber = (firstNum, secondNum, ...numbers) => {
  console.log(firstNum);
  console.log(secondNum);
  let total = 0;
  numbers.map((num) => {
    total = total + num;
  });
  return total;
};
// console.log(addNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// spreed operator example------------->
const firstObj = {
  name: "sabit",
  age: 22,
};
const secondObj = {
  friend: "saiful",
  location: "Indronogor",
};

const finalObj = {
  ...firstObj,
  ...secondObj,
};
console.log(finalObj);
