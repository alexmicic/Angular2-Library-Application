import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

import { User } from './user.component';
import { Rent } from '../rent/rent.component';

@Injectable()
export class UserService {
  private usersUrl = 'api/users/';

  constructor (
    private http: Http,
    private authHttp: AuthHttp
    ) {}

  getUsers(): Observable<User[]> {
    return this.authHttp.get(this.usersUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getUser(id): Observable<User> {
    return this.authHttp.get(this.usersUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getUserRents(id): Observable<Rent[]> {
    return this.authHttp.get(this.usersUrl + id + '/rents')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  createUser(user): Observable<User> {
    return this.authHttp.post(this.usersUrl, user)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteUser(id): Observable<User> {
    return this.authHttp.delete(this.usersUrl + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateUser(id, user): Observable<User> {
    return this.authHttp.put(this.usersUrl + id, user)
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
