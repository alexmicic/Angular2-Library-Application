import { Component, OnInit } from '@angular/core';
import { RentService } from './rent.service';
import { BookService } from '../book/book.service';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Rent } from './rent.component';
import { Book } from '../book/book.component';
import { User } from '../user/user.component';

@Component({
  selector: 'app-rent-add',
  templateUrl: './rent-add.component.html',
  styleUrls: ['./rent-add.component.css']
})
export class RentAddComponent implements OnInit {
  errorMessage: string;
  rent: Rent;
  users: User[];
  books: Book[];

  constructor(
    private rentService: RentService,
    private bookService: BookService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.rent = new Rent;
    this.getUsers();
    this.getBooks();
  }

  back() {
    this.router.navigate(['/rents/'])
  }

  save() {
    this.rentService.createRent(this.rent)
                    .subscribe(
                      next => this.back(),
                      error =>  this.errorMessage = <any>error);
  }

  getUsers() {
    this.userService.getUsers()
                    .subscribe(
                      users => this.users = users,
                      error =>  this.errorMessage = <any>error);
  }

  getBooks() {
    this.bookService.getBooks()
                    .subscribe(
                      books => this.books = books,
                      error =>  this.errorMessage = <any>error);
  }

}
