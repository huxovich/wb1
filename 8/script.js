function executeFunctions(functions) {
  // Внутри функции wrapper будем вызывать каждую функцию и сохранять результаты
  function wrapper() {
    var results = [];
    for (var i = 0; i < functions.length; i++) {
      var result = functions[i](); // Вызываем текущую функцию и сохраняем результат
      results.push(result); // Добавляем результат в массив results
    }
    return results; // Возвращаем массив результатов
  }
  return wrapper; // Возвращаем функцию wrapper
}

function func1() {
  return 1;
}

function func2() {
  return 2;
}

function func3() {
  return 3;
}

const functions = [func1, func2, func3]; // Создаем массив с функциями
let newFunction = executeFunctions(functions); // Получаем новую функцию
let results = newFunction(5); // Вызываем новую функцию и сохраняем результаты
console.log(results);