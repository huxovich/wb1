function getCallStackSize() {
  let depth = 0;
  //Функция `recursion()` является рекурсивной и вызывает саму себя, увеличивая при этом глубину стека вызовов на единицу.
  function recursion() {
    depth++;
    recursion();
  }
  //В блоке `try` функция `recursion()` вызывается без аргументов, но если происходит исключение, то выполнение функции прерывается и возвращается значение глубины стека вызовов.
  try {
    recursion();
  } catch (e) {
    return depth;
  }
}
const callStackSizeChrome = getCallStackSize(); // Размер коллстека
console.log(callStackSizeChrome);
