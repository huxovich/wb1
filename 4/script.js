// Задаем функцию для преобразования числового значения в строковое, в зависимости от слова, переданного в качестве параметра
function num_word(value, words) {  
  let newValue = Math.abs(value) % 100; 
  // Вычисляем остаток от деления нового значения на 10
  let num = newValue % 10;
  // Проверяем условия для выбора правильного слова в зависимости от значения переменной num
  if(newValue > 10 && newValue < 20) return value + ' ' + words[2]; 
  if(num > 1 && num < 5) return  value + ' ' + words[1];
  if(num == 1) return value + ' ' + words[0]; 
  return value + ' ' + words[2];
}

module.exports = num_word;
