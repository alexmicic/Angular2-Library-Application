import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { BookListComponent } from './book-list.component';
import { FormsModule } from '@angular/forms';
import { BookAddComponent } from './book-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BookComponent, BookListComponent, BookAddComponent],
  providers: [BookService]
})
export class BookModule { }
