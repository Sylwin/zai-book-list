import { Injectable } from '@angular/core';
import { BOOKS } from './mock-books';
import { Book } from './book';

@Injectable({
	providedIn: 'root'
})
export class BookService {

	books: Book[];
	filteredBooks: Book[];

	constructor() {
		this.books = JSON.parse(localStorage.getItem("books"));
		if (!this.books) {
			this.books = BOOKS;
			this.setNextId(6);
			this.saveBooksToLocalStorage();
		}
	}

	saveBooksToLocalStorage() {
		localStorage.setItem("books", JSON.stringify(this.books));
	}

	getBooksFromLocalStorage() {
		return JSON.parse(localStorage.getItem("books"));
	}

	setNextId(id: number) {
		localStorage.setItem("nextId", JSON.stringify(id));
	}

	getId() {
		return localStorage.getItem("nextId");
	}

	getBooks() {
		return this.books;
	}

	deleteBook(bookToBeDeleted: Book) {
		this.books = this.books
							.filter(book => book.id !== bookToBeDeleted.id);
		this.saveBooksToLocalStorage();
	}

	addBook(newBook: Book) {
		newBook.id = +this.getId();
		this.setNextId(newBook.id + 1);

		this.books.push(newBook);
		this.saveBooksToLocalStorage();
	}

	editBook(bookToBeEdited: Book) {
		this.books.map(book => {
			if (book.id === bookToBeEdited.id) {
				book = bookToBeEdited;
			}
		});
		
		this.saveBooksToLocalStorage();
	}

	consoleLogBook(book: Book) {
		return "id: " + book.id + "  title: " + book.title + "  price: " + book.price + "   author: " + book.author
		+ "   image: " + book.image + "   city: " + book.city + "   year: " + book.year 
		+ "   description: " + book.description;
	}
}
