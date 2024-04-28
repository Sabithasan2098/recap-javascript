const sentence = "Hello, my name is sabit. And i am learning web development";

//reverse problem - 1
let reverse = "";
for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  reverse = letter + reverse;
}
console.log(reverse);

//reverse problem - 2
let reverse2 = "";
for (const letter of sentence) {
  reverse2 = letter + reverse2;
}
console.log(reverse2);

//reverse problem - 3
const reverse3 = sentence.split("").reverse().join("");
console.log(reverse3);
