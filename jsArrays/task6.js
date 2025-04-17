const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
numbersList.sort((a, b) => a - b);
console.log(numbersList);

const newNumbersList = [1, 2, 4, 5, 10, 14, 34, 43];
newNumbersList.sort((a, b) => b - a);
console.log(newNumbersList);
