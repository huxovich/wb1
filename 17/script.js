// Функция debounce принимает в качестве аргументов функцию и время задержки
function debounce(func, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
// Обработчик события ввода текста
const inputHandler = (e) => {
  const text = e.target.value;
   // Если текст не пустой, вызываем функцию инициализации карты, передавая в нее введенный текст
  if (text.length > 0) {
    ymaps.ready(init(text));
  } else {
    // Иначе скрываем блок с вариантами адресов
    optionsWrapper.style.display = 'none';
  }
};

const debouncedHandleInput = debounce(inputHandler, 800);

const input = document.querySelector('.input');
input.addEventListener('input', debouncedHandleInput);
// Находим обертку для вариантов адресов и добавляем обработчик события клика
const optionsWrapper = document.querySelector('.options__wrapper');
optionsWrapper.addEventListener('click', (e) => {
  input.value = e.target.innerText;
  if (e.target.classList.contains('item')) {
    optionsWrapper.style.display = 'none';
  }
});
// Функция инициализации карты
const init = (text) => {
  ymaps.geocode(text, { results: 5 })
    .then(function (res) {
      optionsWrapper.innerHTML = '';
      optionsWrapper.style.display = 'block';
      for (let i = 0; i < 5; i++) {
        let object = res.geoObjects.get(i);
        let option = document.createElement('div');
        option.className = 'item';
        option.textContent = object.properties._data.description + ' ' + object.properties._data.name;
        optionsWrapper.appendChild(option);
      }
    });
}