import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private modalService: NgbModal) { 
    console.log("cons" + this.books);
    this.books = bookService.getBooks();
    console.log("after" + this.books);
  }

  ngOnInit() {
  }  

  closeResult: string;

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

  addBook(title, author, price, image, city, year, description) {
    let book = new Book();
    book.id = this.books.length + 1;
    book.title = title;
    book.author = author;
    book.price = price;
    book.image = image;
    book.city = city;
    book.year = year;
    book.description = description;
    console.log(book);

    this.bookService.addBook(book);

    console.log(this.books);
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

  editBook(book: Book) {
     //TODO
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book);

    console.log(this.books);
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
