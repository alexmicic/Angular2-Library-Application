import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentComponent } from './rent.component';
import { RentListComponent } from './rent-list.component';
import { RentService } from './rent.service';
import { RentAddComponent } from './rent-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RentComponent, RentListComponent, RentAddComponent],
  providers: [RentService]
})
export class RentModule { }
