import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { OrderModule } from 'ngx-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';
import { FormsModule } from '@angular/forms';
import { DeleteBookModalComponent } from './delete-book-modal/delete-book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FilterPipe,
    AddBookModalComponent,
    DeleteBookModalComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ],
  entryComponents: [
    AddBookModalComponent,
    DeleteBookModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
