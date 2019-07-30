import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/core/models/users.model';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
    @Input() user: IUser;

    get username() {
        return this.user.login.username;
    }
}
