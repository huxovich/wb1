function handleSubmitForm(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Получаем форму, из которой была отправлена событие
  const form = event.target;

  // Получаем значения полей формы
  const formData = new FormData(form);

  // Создаем объект для хранения данных формы
  const data = {};

  // Проходимся по каждой паре ключ-значение в formData
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Отображаем результаты всплывающим окном
  alert(JSON.stringify(data));
}

const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmitForm);