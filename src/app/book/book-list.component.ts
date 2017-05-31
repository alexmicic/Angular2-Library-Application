import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  errorMessage: string;
  books: Book[];

  constructor(
    private bookService: BookService, 
    private titleService: Title, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getBooks();
    this.titleService.setTitle('Library - Books');
  }

  getBooks() {
    this.bookService.getBooks()
                    .subscribe(
                      books => this.books = books,
                      error =>  this.errorMessage = <any>error);
  }

  activateBook(event, id) {
    if (event.target.nodeName !== 'BUTTON' && event.target.className !== 'action') {
      this.router.navigate(['/books/' + id])
    }
  }

  add() {
    this.router.navigate(['/books/add'])
  }

  deleteBook(id) {
    this.bookService.deleteBook(id)
                    .subscribe(
                      rents => this.getBooks(),
                      error =>  this.errorMessage = <any>error);
  }

}
