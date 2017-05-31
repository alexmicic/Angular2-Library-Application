import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// auth
import { Auth } from './auth/auth.service';
import { AuthGuard, AuthGuardAdmin } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';

// app modules
import { LoginModule } from './login/login.module';
import { LandingModule } from './landing/landing.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { RentModule } from './rent/rent.module';
import { ProfileModule } from './profile/profile.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

// app components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add.component';
import { BookListComponent } from './book/book-list.component';
import { BookComponent } from './book/book.component';
import { BookAddComponent } from './book/book-add.component';
import { RentListComponent } from './rent/rent-list.component';
import { RentComponent } from './rent/rent.component';
import { RentAddComponent } from './rent/rent-add.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/landing', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: { 
      title: 'Login' 
    } 
  },
  { 
    path: 'landing', 
    component: LandingComponent,
    canActivate: [AuthGuard],
    data: { 
      title: 'Landing' 
    } 
  },
  { 
    path: 'users', 
    component: UserListComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Users' 
    } 
  },
  { 
    path: 'users/add', 
    component: UserAddComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Add User' 
    } 
  },
  { 
    path: 'users/:id', 
    component: UserComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'User' 
    } 
  },
  { 
    path: 'books', 
    component: BookListComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Books' 
    } 
  },
  { 
    path: 'books/add', 
    component: BookAddComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Add Book' 
    } 
  },
  { 
    path: 'books/:id', 
    component: BookComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Book' 
    } 
  },
  { 
    path: 'rents', 
    component: RentListComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Rents' 
    } 
  },
  { 
    path: 'rents/add', 
    component: RentAddComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Add Rent' 
    } 
  },
  { 
    path: 'rents/:id', 
    component: RentComponent,
    canActivate: [AuthGuard, AuthGuardAdmin],
    data: { 
      title: 'Rent' 
    } 
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard], 
    data: { 
      title: 'Profile' 
    } 
  },
  { 
    path: '404', 
    component: PageNotFoundComponent 
  },
  { 
    path: '**', 
    redirectTo: '404',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,

    // app modules
    LoginModule,
    LandingModule,
    UserModule,
    BookModule,
    RentModule,
    ProfileModule,
    PageNotFoundModule,

    // core modules
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Auth, AuthGuard, AuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
