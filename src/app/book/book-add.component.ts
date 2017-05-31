import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Book } from './book.component';
import { Utils } from './book.component';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  errorMessage: string;
  book: Book;
  years: number[];
  genres: string[];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let utils = new Utils;
    this.genres = utils.genres;
    this.years = utils.generateYears();

    this.book = new Book;
  }

  back() {
    this.router.navigate(['/books/'])
  }

  save() {
    this.bookService.createBook(this.book)
                    .subscribe(
                      next => this.back(),
                      error =>  this.errorMessage = <any>error);
  }

}
