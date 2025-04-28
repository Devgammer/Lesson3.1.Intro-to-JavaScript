
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
      if (!response.ok) {
        throw new Error(`HTTP помилка! Статус: ${response.status}`);
      }
      
      const todoData = await response.json();
      return todoData;
    } catch (error) {
      console.error('Помилка при отриманні todo:', error);
      throw error; 
    }
  }
  
  async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error(`HTTP помилка! Статус: ${response.status}`);
      }
      
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Помилка при отриманні user:', error);
      throw error; 
    }
  }
  
 
  async function processPromises() {
    try {
  
      const allResults = await Promise.all([fetchTodo(), fetchUser()]);
      const [todo, user] = allResults;
      
      console.log('Результати Promise.all:');
      console.log('Todo:', todo);
      console.log('User:', user);
      

      console.log(`Користувач ${user.name} має завдання: ${todo.title}`);
      
   
      const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
      
      console.log('Результат Promise.race (перший завершений запит):', raceResult);
      
     
      if (raceResult.hasOwnProperty('title')) {
        console.log(`Отримано завдання: ${raceResult.title}`);
      } else if (raceResult.hasOwnProperty('name')) {
        console.log(`Отримано користувача: ${raceResult.name}`);
      }
      
      return { allResults, raceResult };
    } catch (error) {
      console.error('Помилка при обробці промісів:', error);
      throw error;
    }
  }
  
  const promiseResults = processPromises();
  
  promiseResults
    .then(results => {
      console.log('Успішне виконання всіх операцій:', results);
    })
    .catch(error => {
      console.error('Помилка під час виконання операцій:', error);
    });