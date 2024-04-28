const mobile = {
  name: "Samsung",
  color: "Black",
  price: "25000",
  camera: "12 mp",
  display: "Oeled",
  isNew: true,
};
for (const key in mobile) {
  console.log(key, ":", mobile[key]);
}
console.log("compare this two array");
const keys = Object.keys(mobile);
for (const key of keys) {
  console.log(key, ":", mobile[key]);
}
