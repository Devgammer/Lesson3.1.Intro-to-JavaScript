const person = {
  firstName: "Mark",
  lastName: "Steinberg",
  age: 38,
};
person.email = "Steinberg@gmail.com";
delete person.age;
console.log(person);
