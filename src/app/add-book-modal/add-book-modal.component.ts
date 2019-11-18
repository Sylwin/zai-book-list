import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {

	@Input() public book;
	@Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  passBack() {
  	this.passEntry.emit(this.book);
  	this.activeModal.close('Save click');
  }

}
