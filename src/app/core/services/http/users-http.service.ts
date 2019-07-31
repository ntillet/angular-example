import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../../models/users.model';

@Injectable()
export class UsersHttpService {

    private api = 'https://randomuser.me/api';

    constructor(private httpClient: HttpClient) { }

    /**
     * @author Nicolas Tillet
     * @desc Gets the list of users from randomuser.me
     */
    getUsers(amount = 20): Observable<any[]> {
        const url = `${this.api}/?seed=ntillet&results=${amount.toString()}`;

        return this.httpClient.get(url).pipe(
            map((response: { results: any[] }) => response.results)
        );
    }

    /**
     * @author Nicolas Tillet
     * @desc Deletes an user
     */
    deleteUser(username: string): Observable<{}> {
        const url = `${this.api}/users/${username}`;
        // To avoid errors
        return of(username);
        return this.httpClient.delete(url);
    }

    /**
     * @author Nicolas Tillet
     * @desc Updates an user
     */
    updateUser(user: User): Observable<User> {
        const url = `${this.api}/users/${user.login.username}`;
        // To avoid errors
        return of(user);
        return this.httpClient.put<User>(url, user);
    }
}
