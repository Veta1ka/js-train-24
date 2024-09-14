console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, який вирішується через 500мс, та повертає рядок "Promise 1"
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });

  // Створюємо проміс promise2, який вирішується через 200мс, та повертає рядок "Promise 2"
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });

  // Створюємо проміс promise3, який вирішується через 300мс, та повертає рядок "Promise 3"
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });

  // Використовуємо Promise.any() для отримання першого з успішних промісів
  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      // Якщо перший проміс вирішується успішно, виводимо результат в консоль
      console.log(`Перший проміс, що виконався: ${result}`);
    })
    .catch((error) => {
      // Якщо всі проміси відхилені, виводимо помилку
      console.error("Всі проміси відхилені:", error);
    });}

// Викликаємо функцію task10
task10();
