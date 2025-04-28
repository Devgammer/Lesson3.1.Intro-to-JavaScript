function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP помилка! Статус: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Помилка при отриманні todo:', error);
      throw error; 
    });
}
function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP помилка! Статус: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Помилка при отриманні user:', error);
      throw error; 
    });
}
const allPromises = Promise.all([fetchTodo(), fetchUser()])
  .then(results => {
    const [todo, user] = results;
    console.log('Результати Promise.all:');
    console.log('Todo:', todo);
    console.log('User:', user);
    return results;
  })
  .catch(error => {
    console.error('Помилка при виконанні Promise.all:', error);
    throw error;
  });

const racePromise = Promise.race([fetchTodo(), fetchUser()])
  .then(firstResult => {
    console.log('Результат Promise.race (перший завершений запит):', firstResult);
    return firstResult;
  })
  .catch(error => {
    console.error('Помилка при виконанні Promise.race:', error);
    throw error;
  });

allPromises.then(([todo, user]) => {
  console.log('Обробка даних з allPromises:');
  console.log(`Користувач ${user.name} має завдання: ${todo.title}`);
});

racePromise.then(result => {
  console.log('Обробка даних з racePromise:');
  if (result.hasOwnProperty('title')) {
    console.log(`Отримано завдання: ${result.title}`);
  } else if (result.hasOwnProperty('name')) {
    console.log(`Отримано користувача: ${result.name}`);
  }
});