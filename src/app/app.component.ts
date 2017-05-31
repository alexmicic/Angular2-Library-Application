import { Component, OnInit } from '@angular/core';
import { Auth } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library Application';

  constructor (
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userId');
    this.router.navigate(['login']);
  }
}
