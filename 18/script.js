function calculateLocalStorageSize() {
  localStorage.clear();
  var testData = "";
  var step = 1024 * 1024; // 1 MB
  var start = 0;
  var end = step;

  try {
    while (true) {
      // Добавляем данные в тестовую строку
      testData += "a".repeat(step);
      localStorage.setItem("testData", testData);
      // Обновляем начальное значение
      start = end;
      // Увеличиваем конечное значение
      end += step;
    }
  } catch (e) {
    // Выполняем бинарный поиск максимального объема
    while (start < end) {
      var middle = Math.floor((start + end) / 2);

      try {
        testData += "a".repeat(step);
        localStorage.setItem("testData", testData);
        start = middle + 1;
      } catch (e) {
        end = middle;
      }
      // Обрезаем тестовую строку до середины
      testData = testData.slice(0, middle);
    }

    localStorage.removeItem("testData");

    return start / (1024 * 1024); // Возвращаем максимальный объем данных в MB
  }
}

var maxLocalStorageSize = calculateLocalStorageSize();
console.log(
  "Максимальный объем данных, который можно записать в localStorage: " + maxLocalStorageSize + " MB"
);
