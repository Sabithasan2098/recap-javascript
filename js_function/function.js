function Square(a) {
  return a * a;
}
const num = 241;
// console.log(square(num));

const bill = (a, b) => {
  return a * b;
};
const result = bill(5, 6);

const bill2 = (a, b) => {
  return a + b;
};
const result2 = bill2(5, 6);

// console.log(result, result2);

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
// console.log(isEven(5));
// console.log(isEven(6));

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}
// console.log(isOdd(5));
// console.log(isOdd(6));
function strSize(str) {
  const size = str.length;
  if (size % 2 === 0) {
    return `it's a even number`;
  }
  return `it's a odd number`;
}
// console.log(strSize("Hellow"));

function dubbleOrTripple(number, doDubble) {
  if (doDubble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(dubbleOrTripple(5, false));

function words(str) {
  const devide = str.replace(/\s/g, "");
  console.log(devide);
  const len = devide.length;
  console.log(len);
}
const w = "Hello I am sabit";
words(w);
