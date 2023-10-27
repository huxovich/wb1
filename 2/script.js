//Первый вариант. Цикл.
function isWeirdNumber(num) {
  // Создаем переменную для хранения суммы делителей
  let sum = 0;
  // Итерируемся по числу от 1 до num - 1
  for (let i = 1; i < num; i++) {
    // Если число делится на i без остатка, то добавляем i к сумме
    if (num % i === 0) {
      sum += i;
    }
  }
  // Если сумма делителей равна числу, то это странное число
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
console.log(isWeirdNumber(6)); // странное
console.log(isWeirdNumber(2)); //не странное
console.log(isWeirdNumber(28)); //странное

//Второй вариант. С помощью массива делителей и метода reduce().
function isWeirdNumber2(num) {
  // Создаем массив из делителей числа, используя метод filter()
  let divisors = [...Array(num).keys()].filter(i => num % i === 0);
  // Считаем сумму делителей, используя метод reduce()
  let sum = divisors.reduce((acc, cur) => acc + cur, 0);
  // Если сумма делителей равна числу, то это странное число
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
console.log(isWeirdNumber2(6)); // странное
console.log(isWeirdNumber2(2)); //не странное
console.log(isWeirdNumber2(28)); //странное