import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { IUser } from 'src/app/core/models/users.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    private subscriptions = new Subscription();

    userList: IUser[];

    constructor(
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.subscriptions.add(
            this.usersService.fetchUserList().subscribe((userList) => this.userList = userList)
        );

        this.usersService.loadUserList();
    }
}
