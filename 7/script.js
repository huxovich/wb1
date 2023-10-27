function executeFunctions(functions, index = 0) {
  if (index < functions.length) {
  // Вызываем функцию по текущему индексу
  functions[index]();
  // Рекурсивно вызываем следующую функцию
  executeFunctions(functions, index + 1);
  }
  }
  
  // Пример использования
  var functions = [
  function() { console.log("Вызвана функция 1"); },
  function() { console.log("Вызвана функция 2"); },
  function() { console.log("Вызвана функция 3"); }
  ];
  executeFunctions(functions);