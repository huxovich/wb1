function analyzePassword(password) {
  // Оценка сложности пароля
  let score = 0;

  // Проверка длины пароля
  if (password.length >= 8) {
    score++;
  }

  // Проверка наличия различных типов символов
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    score++;
  }
  if (/\d/.test(password)) {
    score++;
  }
  if (/[!@#$%^&*(),.?:{}|<>]/.test(password)) {
    score++;
  }

  // Вывод оценки сложности пароля
  switch (score) {
    case 0:
      console.log("Очень слабый пароль");
      break;
    case 1:
    case 2:
      console.log("Слабый пароль");
      break;
    case 3:
      console.log("Средний пароль");
      break;
    case 4:
      console.log("Сильный пароль");
      break;
    default:
      console.log("Неправильный пароль");
      break;
  }

  if (score == 1|| score == 0){
    if (password.length < 8) {
      console.log("Увеличьте длину пароля.");
  }
  if (!(/[a-z]/.test(password)) || !(/[A-Z]/.test(password))) {
    console.log("Используйте буквы в разных регистрах.");
  }
  if (!/\d/.test(password)) {
    console.log("Добавьте цифры в пароль.");
  }
  if (!(/[^a-zA-Z0-9]/.test(password))) {
    console.log("Добавьте в пароль спецсимволы, например, !, @, #, и т.д.");
  }
  }
}


// Пример использования функции
let userPassword = prompt("Введите пароль:");
analyzePassword(userPassword);