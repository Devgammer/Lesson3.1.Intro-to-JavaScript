const users = [
  { name: "Mark", age: 30, email: "Steinberg@gmail.com" },
  { name: "Aidra", age: 25, email: "Fox1986@gmail.com" },
  { name: "Mike", age: 40, email: "MDuglas@gmail.com" },
];
for (const { name, age, email } of users) {
  console.log(`${name}, ${age}, ${email}`);
}
