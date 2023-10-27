function toLinkedList(jsondata) {
  // Если входной JSON пуст, то возвращаем null
  if (jsondata.length === 0) {
    return null;
  }
  // Создаем первый элемент связного списка
  let head = {
    value: jsondata[0].value,
    next: null,
  };
  // Сохраняем ссылку на текущий элемент
  let current = head;
  // Для каждого элемента входного массива
  for (let i = 1; i < jsondata.length; i++) {
    // Создаем новый элемент связного списка
    let node = {
      value: jsondata[i].value,
      next: null,
    };
    // Устанавливаем ссылку на следующий элемент в текущем элементе
    current.next = node;
    // Переходим к следующему элементу
    current = current.next;
  }
  return head;
}

let jsondata = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
];
console.log(toLinkedList(jsondata));
console.log('...')
console.log(toLinkedList(jsondata).next);
console.log('...')
console.log(toLinkedList(jsondata).next.next);
