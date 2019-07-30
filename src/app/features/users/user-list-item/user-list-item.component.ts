import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/core/models/users.model';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
    @Input() user: IUser;
}
