import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FilterPipe,
    AddBookModalComponent
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ],
  entryComponents: [
    AddBookModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
