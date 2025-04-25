import Book from "./Book.js";
import EBook from "./EBook.js";

const twen = new Book("Принц и нищий", "Марк Твен", 1881);
const diggens = new Book("Больши́е наде́жды", "Чарльз Диккенс", 1860);
diggens.printInfo();
twen.printInfo();

const twen1 = new EBook("Принц и нищий", "Марк Твен", 1881, "PDF");
const diggens1 = new EBook("Больши́е наде́жды", "Чарльз Диккенс", 1860, "FB");
diggens1.printInfo();
twen1.printInfo();
