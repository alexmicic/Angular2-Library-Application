import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Rent } from '../rent/rent.component';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  id: string;
  rents: Rent[];
  errorMessage: string;

  constructor(
    private titleService: Title, 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private auth: Auth
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Library');

    if (this.auth.isAdmin() === 'false') {
      // read id from route
      this.id = this.auth.getUserId();
      // load data
      this.getUserRents();
    }
  }

  getUserRents() {
    this.userService.getUserRents(this.id)
                    .subscribe(
                      rents => this.rents = rents,
                      error =>  this.errorMessage = <any>error);
  }

}
