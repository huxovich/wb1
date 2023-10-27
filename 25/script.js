function addStyledElement(styleText) {
  // Создаем новый элемент
  var newElement = document.createElement('div');
  // Добавляем стиль с помощью CSS
  newElement.style.cssText = styleText;
  // Добавляем элемент в DOM
  document.body.appendChild(newElement);
}

// Пример использования функции
addStyledElement('width: 200px; height: 100px; background-color: yellow;');