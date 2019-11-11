import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
