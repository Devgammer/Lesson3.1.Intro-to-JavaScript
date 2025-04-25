export default class Book {
  #title;
  #author;
  #year;
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getYear() {
    return this.#year;
  }

  // Сеттери з валідацією
  setTitle(title) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Назва книги повинна бути непорожнім рядком");
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof author !== "string" || author.trim() === "") {
      throw new Error("Автор книги повинен бути непорожнім рядком");
    }
    this.#author = author;
  }

  setYear(year) {
    const yearNum = Number(year);
    if (isNaN(yearNum) || yearNum < 0 || yearNum > new Date().getFullYear()) {
      throw new Error(
        "Рік видання повинен бути коректним числом від 0 до поточного року"
      );
    }
    this.#year = yearNum;
  }

  printInfo() {
    console.log(
      `Книга: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`
    );
  }
  // Статичний метод для знаходження найдавнішої книги
  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Передайте непорожній масив книг");
    }

    return books.reduce((oldest, current) => {
      return current.getYear() < oldest.getYear() ? current : oldest;
    }, books[0]);
  }
}
