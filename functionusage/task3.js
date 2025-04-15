function divide(numerator, denominator){
  if (denominator === 0) {
    throw new Error ('Деление на ноль невозможно');
  }
  if (typeof numerator !=='number' || typeof denominator!=='number') {
    throw new Error ('Один из параметров не является числом');
  }

  return numerator / denominator;

}

try{
    console.log(divide(10, 2)) 
} catch (error){
    console.log(error.message);
}