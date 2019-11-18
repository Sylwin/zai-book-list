import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private modalService: NgbModal) { 
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  closeResult: string;
  p: number = 1; 


//--------------  SORTING --------------

  key: string = 'price';
  descending: boolean = false;  
  selectedSort: string = "Price Ascending";

  sort(key, descending, selectedSort) {
  	this.key = key;
  	this.descending = descending;
    this.selectedSort = selectedSort;
  }

//--------------  FILTERRING --------------

  minimum: number = 1;
  maximum: number = Number.MAX_VALUE;
  filter(min, max) {
    if (!min)
      min = 1;
    if (!max)
      max = Number.MAX_VALUE;
    this.minimum = min;
    this.maximum = max;
  }

//--------------  DELETE --------------

  deleteBook(book: Book) {
    console.log("Delete book:  " + this.consoleLogBook(book));
    this.bookService.deleteBook(book);
    this.books = this.bookService.getBooksFromLocalStorage();
  }

//--------------  ADD --------------

  addBook(book: Book) {
    console.log("Add book:  " + this.consoleLogBook(book));
    this.bookService.addBook(book);
    this.books = this.bookService.getBooksFromLocalStorage();
  } 

  openAddModal() {
    const modalRef = this.modalService.open(AddBookModalComponent);
    
    modalRef.componentInstance.type = "ADD";
    modalRef.componentInstance.book = new Book();
    
    modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });

    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.addBook(receivedEntry);
      console.log(receivedEntry);
    });
  }

//--------------  EDIT --------------

  editBook(book: Book) {
    console.log("Edit book:  " + this.consoleLogBook(book));
    this.bookService.editBook(book);
    this.books = this.bookService.getBooksFromLocalStorage();
  }

  openEditModal(book) {    
    const modalRef = this.modalService.open(AddBookModalComponent);
        
    modalRef.componentInstance.type = "EDIT";
    modalRef.componentInstance.book = book;

    modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
      this.books = this.bookService.getBooksFromLocalStorage();
    });

    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.editBook(receivedEntry);
      console.log("Received Entry: " + this.consoleLogBook(receivedEntry));
    });
  }

//--------------  OTHER --------------

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  consoleLogBook(book: Book) {
    return "id: " + book.id + "  title: " + book.title + "  price: " + book.price + "   author: " + book.author
    + "   image: " + book.image + "   city: " + book.city + "   year: " + book.year 
    + "   description: " + book.description;
  }

}
