function createAndAppendElement(templateId, containerId) {
  // Находим шаблон по его id
  const template = document.getElementById(templateId);

  // Проверяем, что шаблон существует
  if (template === null) {
    console.error(`Шаблон с id "${templateId}" не найден`);
    return;
  }

  // Создаем элемент из содержимого шаблона
  const element = document.importNode(template.content, true);

  // Находим контейнер, в который нужно добавить элемент
  const container = document.getElementById(containerId);

  // Проверяем, что контейнер существует
  if (container === null) {
    console.error(`Контейнер с id "${containerId}" не найден`);
    return;
  }

  // Добавляем созданный элемент в контейнер
  container.appendChild(element);
}
createAndAppendElement("myTemplate", "myContainer");