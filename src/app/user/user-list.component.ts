import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  errorMessage: string;
  users: User[];

  constructor(
    private userService: UserService, 
    private titleService: Title, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getUsers();
    this.titleService.setTitle('Library - Users');
  }

  getUsers() {
    this.userService.getUsers()
                    .subscribe(
                      users => this.users = users,
                      error =>  this.errorMessage = <any>error);
  }

  activateUser(event, id) {
    if (event.target.nodeName !== 'BUTTON' && event.target.className !== 'action') {
      this.router.navigate(['/users/' + id])
    }
  }

  add() {
    this.router.navigate(['/users/add'])
  }

  deleteUser(id) {
    this.userService.deleteUser(id)
                    .subscribe(
                      next => this.getUsers(),
                      error =>  this.errorMessage = <any>error);
  }
}
