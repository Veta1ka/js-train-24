console.log("Завдання: 8 ==============================");

function task8() {
  function fetchFakeData() {
    // Створюємо fakeData константу з даними { name: "John", age: 30 }
    const fakeData = { name: "John", age: 30 };

    // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
    return Promise.resolve(fakeData);
  }

  // Викликаємо функцію fetchFakeData
  fetchFakeData()
    // Якщо проміс виконаний успішно виводимо в консоль дані, які він повертає
    .then((data) => {
      console.log("Дані отримані:", data);
    })
    // Якщо проміс виконаний з помилкою, виводимо в консоль помилку (в даному випадку помилок не повинно бути)
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });}

// Викликаємо функцію task8
task8();
