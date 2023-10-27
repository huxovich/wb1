let book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,

  // Метод для получения названия книги
  getTitle: function() {
    return this.title;
  },

  // Метод для изменения названия книги
  setTitle: function(newTitle) {
    this.title = newTitle;
  },

  // Метод для получения автора книги
  getAuthor: function() {
    return this.author;
  },

  // Метод для изменения автора книги
  setAuthor: function(newAuthor) {
    this.author = newAuthor;
  },

  // Метод для получения года издания книги
  getYear: function() {
    return this.year;
  },

  // Метод для изменения года издания книги
  setYear: function(newYear) {
    this.year = newYear;
  }
};

console.log(book.getTitle()); 
console.log(book.getAuthor());
console.log(book.getYear());

book.setTitle("Новое название книги");
book.setAuthor("Новый автор");
book.setYear("Новый год");

console.log(book.getTitle()); 
console.log(book.getAuthor());
console.log(book.getYear());
