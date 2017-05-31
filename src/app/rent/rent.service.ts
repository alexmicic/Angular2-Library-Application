import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

import { Rent } from './rent.component';

@Injectable()
export class RentService {
  private usersUrl = 'api/rents/';

  constructor (
    private http: Http,
    private authHttp: AuthHttp
    ) {}

  getRents(): Observable<Rent[]> {
    return this.authHttp.get(this.usersUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getRent(id): Observable<Rent> {
    return this.authHttp.get(this.usersUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  createRent(rent): Observable<Rent> {
    return this.authHttp.post(this.usersUrl, rent)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateRent(id, rent): Observable<Rent> {
    return this.authHttp.put(this.usersUrl + id, rent)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteRent(id): Observable<Rent> {
    return this.authHttp.delete(this.usersUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}