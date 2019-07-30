import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUser } from '../../models/users.model';

@Injectable()
export class UsersHttpService {

    private api = 'https://randomuser.me/api';

    constructor(private httpClient: HttpClient) { }

    /**
     * @author Nicolas Tillet
     * @desc Gets the list of users from randomuser.me
     */
    getUsers(amount = 20): Observable<IUser[]> {
        let url = `${this.api}/?seed=ntillet&results=${amount.toString()}`;

        return this.httpClient.get(url).pipe(
            map((response: { results: [] }) => response.results)
        );
    }
}
