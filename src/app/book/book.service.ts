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
		if (!this.books || this.books.length === 0) {
			this.books = BOOKS;
			this.saveBooksToLocalStorage();
		}
	}

	saveBooksToLocalStorage() {
		localStorage.setItem("books", JSON.stringify(this.books));
	}

	getBooks() {
		return this.books;
	}

	addBook(newBook: Book) {
		this.books.push(newBook);
		this.books = this.books;
		this.saveBooksToLocalStorage();
	}

	deleteBook(bookToBeDeleted: Book) {
		this.books = this.books.filter(book => book !== bookToBeDeleted);
		this.saveBooksToLocalStorage();
	}

	editBook(bookToBeEdited: Book) {
		console.log("book to be edited: " + bookToBeEdited);
	
		this.books = this.getBooks();
		
		console.log("from LS: " + this.books);

		this.filteredBooks = this.books
							.filter(book => book.id === bookToBeEdited.id);

		this.deleteBook(this.filteredBooks.pop());

		this.addBook(bookToBeEdited);

		this.saveBooksToLocalStorage();

		console.log("after save from LS: " + JSON.parse(localStorage.getItem("books")));
	}
}
