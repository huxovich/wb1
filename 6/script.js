function sortObjects(arr) {
  // Сортируем массив по возрастанию возраста
  arr.sort((a, b) => a.age - b.age);
  for (let i = 0; i < arr.length - 1; i++) {
    // Если возраст текущего элемента равен возрасту следующего элемента
    if (arr[i].age === arr[i + 1].age) {
      // Сравниваем имена и меняем элементы местами, если необходимо
      if (arr[i].name > arr[i + 1].name) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

let arr = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'John', age: 20 },
];
console.log(sortObjects(arr)); // [{ name: 'John', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]