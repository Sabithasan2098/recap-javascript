// let sum = 0;
// for (let i = 0; i <= 20; i++) {
//   sum = sum + i;
// }
// console.log(sum);
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
    sum = sum + i;
  }
}
// console.log(sum);

//make odd numbers-------------------------------->
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//make a even numbers----------------------------->
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
