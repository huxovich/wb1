async function myAsyncFunction() {
  // Ожидание выполнения промиса, который разрешится через 2 секунды
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Привет, мир!");
}
// Вызов асинхронной функции myAsyncFunction
myAsyncFunction();
console.log("Функция запущена!");