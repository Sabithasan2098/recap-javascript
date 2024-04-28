const person = {
  name: "Sabit",
  age: 22,
  work: "Programmer",
  salary: 0,
  "favorite places": ["Sundarban", "Bandarban", "Cox's Bazar", "Kua Kata"],
};

person.age = 25;
person["salary"] = 25000;
const latestName = "name";
person[latestName] = "Md: Sabit Hasan";
// console.log(person);
const keys = Object.keys(person);
// console.log(keys);
const values = Object.values(person);
// console.log(values);

const college = {
  name: "vnc",
  subject: ["science", "math", "english"],
  unique: {
    color: "Red",
    result: {
      gpa: "A+",
      merit: "top most",
    },
  },
};
