import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  dateCreated: string;
  phone: string;
  email: string;
  password: string;
  admin: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  errorMessage: string;
  user: User;
  id: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // read id from route
      this.id = params['id'];
      // load data
      this.getUser();
    });
  }

  getUser() {
    this.userService.getUser(this.id)
                    .subscribe(
                      user => this.user = user,
                      error =>  this.errorMessage = <any>error);
  }

  back() {
    this.router.navigate(['/users/'])
  }

  save() {
    this.userService.updateUser(this.id, this.user)
                    .subscribe(
                      next => this.back(),
                      error =>  this.errorMessage = <any>error);
  }

}
