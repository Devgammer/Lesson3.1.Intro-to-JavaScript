const car = {
  brand: "BMW",
  model: " X3",
  year: 2020,
};
const car2 = {
  brand: "BMW",
  model: "Марк Твен",
  owner: "Mark Steinberg",
};
const car3 = { ...car, ...car2, price: 125000 };
console.log(car3);
