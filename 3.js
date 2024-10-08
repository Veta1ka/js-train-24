console.log("Завдання: 3 ==============================");

// Створюємо функцію task3, в якій буде виконуватися завдання
function task3() {
  // Створюємо функцію promise1, яка створює і повертає новий проміс
  function promise1() {
    // Метод new Promise приймає в якості параметра функцію (executor), яка має два параметри: resolve і reject.
    return new Promise((resolve) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 1 секунду
      setTimeout(() => {
        // Викликаємо resolve з рядком 'Проміс 1 виконано', що означає успішне вирішення проміса
        resolve('Проміс 1 виконано');
      }, 1000);
    });
  }
  
  // Створюємо функцію promise2, яка створює і повертає новий проміс, який відхиляється
  function promise2() {
    // Використовуємо setTimeout для імітації асинхронної операції, яка не вдається і відхиляє проміс через 2 секунди
    return new Promise((_, reject) => {
      setTimeout(() => {
        // Викликаємо reject з рядком 'Проміс 2 відхилено', що означає відхилення проміса
        reject('Проміс 2 відхилено');
      }, 2000);
    });
  }
  
  // Використовуємо Promise.allSettled який приймає масив промісів і повертає новий проміс, який вирішується, коли всі проміси вирішено або відхилено
  // Він повертає масив об'єктів, кожний з яких відображає стан кожного проміса
  Promise.allSettled([promise1(), promise2()])
  // Функція then викликається, коли проміс вирішено
  // Вона приймає результати промісів і обробляє їх
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        // Для кожного результату виводимо статус проміса
        console.log(`Проміс ${index + 1} виконано: ${result.value}`);
      } else {
        console.log(`Проміс ${index + 1} відхилено: ${result.reason}`)
      }
    });
  })
  
  // Функція finally викликається після того, як проміс вирішено або відхилено
  // Вона використовується для виконання дій, які повинні виконуватися незалежно від того, чи було проміс вирішено чи відхилено
  .finally(() => {
    // В нашому випадку ми просто виводимо повідомлення, "Завдання 3 завершено"
    console.log('Завдання завершено');
  });
}

// Викликаємо функцію task3
task3();
