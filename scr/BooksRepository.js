"use strict";
class Book {
    constructor(title, description, authors, favorite, fileCover, fileName, fileBook, id) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
}
class BooksRepository {
    constructor(books) {
        this.books = books;
    }
    //Добавляет новую книгу в массив books
    createBook(Book) {
        this.books.push(Book);
    }
    //Перебирает массив книг и возвращает экземпляр класса Book
    getBook(id) {
        for (let currentBook of this.books) {
            if (currentBook.id == id) {
                return currentBook;
            }
        }
    }
    //Возвращает ссылку на массив всех книг
    getBooks() {
        return this.books;
    }
    //обновляет книгу в массиве, добавил методу updateBook второй параметр экземпляр класса Book, иначе не понятно что можно обновить только по id.
    updateBook(id, book) {
        for (let currentBook of this.books) {
            if (currentBook.id == id) {
                currentBook = book;
            }
        }
    }
    //удаляет книгу в массиве:
    deleteBook(id) {
        for (let currentBook of this.books) {
            if (currentBook.id == id) {
                currentBook = new Book('', '', '', false, '', '', '', '');
            }
        }
    }
}
