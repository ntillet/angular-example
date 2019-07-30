import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { IUser } from 'src/app/core/models/users.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
    private subscriptions = new Subscription();

    displayedColumns = ['fullname', 'address', 'email', 'username', 'edit', 'delete'];
    userList: IUser[];

    constructor(
        private usersService: UsersService,
        private router: Router
    ) {
        this.subscriptions.add(
            this.usersService.fetchUserList().subscribe((userList) => this.userList = userList)
        );
    }

    ngOnInit() {
        this.usersService.loadUserList();
    }

    openUser(user: IUser) {
        this.router.navigate(['/users/' + user.login.username]);
    }

    getFormattedAddress(user: IUser) {
        return user.location.street + ", " + user.location.city + ", " + user.location.state;
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
