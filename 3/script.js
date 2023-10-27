// Реализация функции для вычисления N-го числа в ряду Фибоначчи
function fibonacci(n) {
  // Создаем массив, в котором будем хранить числа Фибоначчи
  let fib = [0, 1];
  // Используем замыкание для доступа к массиву fib из внутренней функции
  function calcFib(n) {
    // Если число уже было вычислено, возвращаем его из массива
    if (fib[n] !== undefined) {
      return fib[n];
    }
    // Вычисляем число и добавляем его в массив
    fib[n] = calcFib(n - 1) + calcFib(n - 2);
    return fib[n];
  }
  // Вызываем внутреннюю функцию и возвращаем результат
  return calcFib(n);
}
console.log(fibonacci(10))
console.log(fibonacci(4))

// Реализация функции для вычисления всех чисел в ряду Фибоначчи до числа N
function fibonacciSeries(n) {
  // Создаем массив, в котором будем хранить числа Фибоначчи
  let fib = [0, 1];
  // Используем замыкание для доступа к массиву fib из внутренней функции
  function calcFib(n) {
    // Если число уже было вычислено, возвращаем его из массива
    if (fib[n] !== undefined) {
      return fib[n];
    }
    // Вычисляем число и добавляем его в массив
    fib[n] = calcFib(n - 1) + calcFib(n - 2);
    return fib[n];
  }
  // Вызываем внутреннюю функцию для каждого числа до N и добавляем результаты в массив
  for (let i = 2; i <= n; i++) {
    calcFib(i);
  }
  // Возвращаем массив с числами Фибоначчи
  return fib;
}
console.log(fibonacciSeries(10))
console.log(fibonacciSeries(4))

// Функция для проверки простого числа
function simpleNumber(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// Функция для поиска N-го простого числа
function findNthPrime(n) {
  //Храним количество найденных простых чисел
  let count = 0;
  //Текущее значение числа для проверки
  let num = 2;
  while (count < n) {
    if (simpleNumber(num)) {
      //Если число простое, то увеличиваем количество на один
      count++;
    }
    //Смотрим следующее число
    num++;
  }
  //После завершения цикла while возвращаем значение num - 1, так как перед выходом из цикла значение num увеличивается на 1 лишний раз
  return num - 1;
}
console.log(findNthPrime(4));

function simpleUntil(n) {
  //Заводим массив для хранения простыъ чисел
  var simpleList = [];
  for (var i = 2; i <= n; i++) {
    if (simpleNumber(i)) {
      simpleList.push(i);
    }
  }
  return simpleList;
}

console.log(simpleUntil(20))


