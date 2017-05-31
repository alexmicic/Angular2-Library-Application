import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserAddComponent } from './user-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UserListComponent, UserComponent, UserAddComponent],
  providers: [UserService]
})
export class UserModule { }
