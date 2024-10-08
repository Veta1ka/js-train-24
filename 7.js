console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  // Створюємо новий проміс.
  const promise = new Promise((resolve, reject) => {
    // Використовуємо функцію setInterval, щоб виконати функцію кожну секунду
    const intervalId = setInterval(() => {
      // Отримаємо поточну дату та час
      const now = new Date();
      // Отримуємо секунди з поточної дати
      const seconds = now.getSeconds();
      // Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
      console.log(`Поточні секунди: ${seconds}`);

      // Якщо поточні секунди кратні 10
      if (seconds % 10 === 0) {
        // Очищуємо інтервал
        clearInterval(intervalId);
        // Резолвимо проміс з рядком "Поточні секунди кратні 10!"
        resolve("Поточні секунди кратні 10!");
      }

      // Якщо поточні секунди кратні 3
      if (seconds % 3 === 0) {
        // Очищуємо інтервал
        clearInterval(intervalId);
        // Відхиляємо проміс з рядком "Поточні секунди кратні 3!"
        reject("Поточні секунди кратні 3!");
      }
    }, 1000); // Оновлюється кожну секунду
  });

  // Використовуємо then для обробки зарезолвленого проміса
  promise
    .then((value) => {
      // Виводимо значення у випадку успіху
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    // Якщо проміс відхилено, обробляємо помилку за допомогою catch
    .catch((error) => {
      // Виводимо помилку
      console.log(`Проміс відхилився з помилкою: ${error}`);
    })
    // Використовуємо finally для виконання дій після завершення проміса
    .finally(() => {
      // Повідомлення про завершення
      console.log("Проміс завершено");
    });
}

// Викликаємо функцію task7
task7();
