// function divide(numerator, denominator){
//   if (denominator === 0) {
//     throw new Error ('Деление на ноль невозможно');
//   }
//   if (typeof numerator !=='number' || typeof denominator!=='number') {
//     throw new Error ('Один из параметров не является числом');
//   }

//   return numerator / denominator;

// }

// try{
//     console.log(divide(10, 2)) 
// } catch (error){
//     console.log(error.message);
// }



const namesList = ['John', 'Sergey', 'Olga'];

for (let i = 0; i < namesList.length; i++) {
  console.log(`Index: ${i}, value: ${namesList[i]}`);
  // console.log(namesList[i]);
}

for (const name of namesList){
  console.log(name);
}

 