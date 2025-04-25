import Book from "./Book.js";

export default class EBook extends Book {
  #fileFormat;
  constructor(title, author, year, format) {
    super();
    this.title = title;
    this.author = author;
    this.year = year;
    this.format = format;
    this.setgetTitle(title);
  }
  getFileFormat() {
    return this.#fileFormat;
  }
  // Сеттер для формату файлу з валідацією
  setFileFormat(fileFormat) {
    const validFormats = ["PDF", "EPUB", "MOBI", "FB2", "TXT"];
    if (
      typeof fileFormat !== "string" ||
      !validFormats.includes(fileFormat.toUpperCase())
    ) {
      throw new Error(
        `Формат файлу повинен бути одним із: ${validFormats.join(", ")}`
      );
    }
    this.#fileFormat = fileFormat.toUpperCase();
  }
  printInfo() {
    console.log(
      `Книга: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат: ${this.format}`
    );
  }
  // Статичний метод для створення EBook з екземпляру Book
  static createFromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error("Перший аргумент повинен бути екземпляром класу Book");
    }

    return new EBook(
      book.getTitle(),
      book.getAuthor(),
      book.getYear(),
      fileFormat
    );
  }
  setgetTitle(title) {
    if ((title = "Принц и нищий")) {
      console.log("Добра книжка");
    } else {
      console.log("Велика книжка");
    }
  }
}
