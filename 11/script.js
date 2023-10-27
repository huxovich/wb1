function outerFunction() {
  // Переменная, определенная во внешней функции
  let variable = "test";
  // Возвращаем внутреннюю функцию
  return function innerFunction() {
    // Возвращаем значение переменной
    return variable;
  };
}

let innerFunction = outerFunction();
let result = innerFunction();
console.log(result)