import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-delete-book-modal',
	templateUrl: './delete-book-modal.component.html',
	styleUrls: ['./delete-book-modal.component.css']
})
export class DeleteBookModalComponent implements OnInit {

	@Input() public book;
	@Output() passEntry: EventEmitter<any> = new EventEmitter();

	constructor( public activeModal: NgbActiveModal) { }

	ngOnInit() {}

	confirm() {
		this.passEntry.emit(this.book);
		this.activeModal.close('Save click');
	}

	closeModal() {
		this.activeModal.close('Cancel deletion');	
	}

}
