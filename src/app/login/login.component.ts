import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  msg: string = '';
  user: {} = {
    email: '',
    password: ''
  };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user)
                    .subscribe(
                      data => {
                        if (data.success) {
                          localStorage.setItem('token', data.token);
                          localStorage.setItem('isAdmin', data.admin);
                          localStorage.setItem('userId', data.id);
                          this.router.navigate(['landing']);
                        } else {
                          this.msg = 'Something went wrong, please check your input data try again.'
                        }
                      },
                      error =>  this.errorMessage = <any>error);
  }

}
