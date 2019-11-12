import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  bookService: BookService;

  constructor(bookService: BookService) { 
    this.bookService = bookService;
    this.books = bookService.getBooks();
  }

  ngOnInit() {
  }  

  minimum: number = 1;
  maximum: number = Number.MAX_VALUE;

  key: string = 'price';
  descending: boolean = false;  
  selectedSort: string = "Price Ascending";

  p: number = 1;

  sort(key, descending, selectedSort) {
  	this.key = key;
  	this.descending = descending;
    this.selectedSort = selectedSort;
  }

  filter(min, max) {
    if (!min)
      min = 1;
    if (!max)
      max = Number.MAX_VALUE;
    this.minimum = min;
    this.maximum = max;
  }

  editBook(book: Book) {
     //TODO
  }

  deleteBook(book: Book) {
    console.log(book);
    this.bookService.deleteBook(book);
    this.books = this.bookService.getBooks();
  }

}
