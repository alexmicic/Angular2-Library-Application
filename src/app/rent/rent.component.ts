import { Component, OnInit } from '@angular/core';

export class Rent {
  user: string;
  books: string[];
  notes: string;
  dateRented: string;
  returned: boolean;
}

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
