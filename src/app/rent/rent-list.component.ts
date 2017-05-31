import { Component, OnInit } from '@angular/core';
import { RentService } from './rent.service';
import { Rent } from './rent.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  errorMessage: string;
  rents: Rent[];

  constructor(
    private rentService: RentService,
    private titleService: Title, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getRents();
    this.titleService.setTitle('Library - Rents');
  }

  getRents() {
    this.rentService.getRents()
                    .subscribe(
                      rents => this.rents = rents,
                      error =>  this.errorMessage = <any>error);
  }

  activateRent(event, id) {
    if (event.target.nodeName !== 'BUTTON' && event.target.className !== 'action') {
      this.router.navigate(['/rents/' + id])
    }
  }

  add() {
    this.router.navigate(['/rents/add'])
  }

  deleteRent(id) {
    this.rentService.deleteRent(id)
                    .subscribe(
                      rents => this.getRents(),
                      error =>  this.errorMessage = <any>error);
  }

  updateRent(id) { 
    this.rentService.getRent(id)
                    .subscribe(
                      rent => {
                        rent.returned = true;

                        this.rentService.updateRent(id, rent)
                                        .subscribe(
                                          rents => this.getRents(),
                                          error =>  this.errorMessage = <any>error);
                      },
                      error =>  this.errorMessage = <any>error);
  }

}
