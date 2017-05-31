import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export class Book {
  id: string;
  title: string;
  author: string;
  year: number;
  stock: number;
  genre: string;
}

export class Utils {
  genres: string[] = [
    'Science fiction', 'Satire', 'Drama', 'Action and Adventure', 'Romance', 'Mystery', 'Horror', 'Self help', 'Health', 'Guide',
    'Travel', 'Children`s', 'Religion, Spirituality & New Age', 'Science', 'History', 'Math', 'Anthology', 'Poetry', 'Encyclopedias',
    'Dictionaries', 'Comics', 'Art', 'Cookbooks', 'Diaries', 'Journals', 'Prayer books', 'Series', 'Trilogy', 'Biographies',
    'Autobiographies', 'Fantasy'
  ];

  generateYears() {
    let currentYear = new Date().getFullYear(), 
        years = [],
        startYear = 1900;

    while ( startYear <= currentYear ) {
            years.push(startYear++);
    } 

    return years;
  }
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  errorMessage: string;
  book: Book;
  id: string;
  years: number[];
  genres: string[];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // read id from route
      this.id = params['id'];
      // load data
      this.getBook();
    });

    let utils = new Utils;
    this.genres = utils.genres;
    this.years = utils.generateYears();
  }

  getBook() {
    this.bookService.getBook(this.id)
                    .subscribe(
                      book => this.book = book,
                      error =>  this.errorMessage = <any>error);
  }

  back() {
    this.router.navigate(['/books/'])
  }

  save() {
    this.bookService.updateBook(this.id, this.book)
                    .subscribe(
                      next => this.back(),
                      error =>  this.errorMessage = <any>error);
  }

}
