function convertJSONToString(json) {
  let result = "{";
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      let value = json[key];
      // Проверяем тип значения
      if (typeof value === "object" && value !== null) {
        // Если значение является объектом, рекурсивно преобразуем его в строку
        value = convertJSONToString(value);
      } else {
        // Если значение не является объектом, преобразуем его в строку
        value = '"' + value + '"';
      }
      result += '"' + key + '":' + value + ",";
    }
  }
  // Удаляем запятую перед закрывающей скобкой
  if (result !== "{") {
    result = result.slice(0, -1);
  }
  result += "}";
  return result;
}

let jsonData = {
  name: "John",
  age: 30,
  city: "New York"
};

let jsonString = convertJSONToString(jsonData);
console.log(jsonString); 