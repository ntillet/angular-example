import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUser } from '../models/users.model';

@Injectable()
export class UsersService {

  private api = 'https://randomuser.me/api';

  constructor(private http: Http) { }

  /**
   * @author Nicolas Tillet
   * @desc Gets the list of users from randomuser.me
   */
  getUsers(amount = 20): Observable<IUser[]> {
    let url = `${this.api}&results=${amount.toString()}`;

    return this.http.get(url).pipe(
      map(response => response.json().results || [])
    );
  }
}
