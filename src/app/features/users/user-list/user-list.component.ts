import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/core/models/users.model';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    private subscriptions = new Subscription();

    displayedColumns = ['fullname', 'address', 'email', 'username', 'edit', 'delete'];
    userListDS: MatTableDataSource<User>;
    olderUsername: string;

    constructor(
        private usersService: UsersService,
        private router: Router
    ) {
        this.subscriptions.add(
            this.usersService.fetchUserList().subscribe((userList) => {
                this.userListDS = new MatTableDataSource(userList);
                this.userListDS.sort = this.sort;
                this.userListDS.paginator = this.paginator;
            })
        );
    }

    ngOnInit() {
        this.usersService.loadUserList();
    }

    openUser(user: User) {
        this.router.navigate(['/users/' + user.login.username]);
    }

    edit(user: User, event) {
        event.stopPropagation();
        this.router.navigate(['/users/' + user.login.username, { isEditing: true }]);
    }

    delete(user: User, event) {
        event.stopPropagation();
        this.usersService.deleteUser(user.login.username);
    }

    showOlderUser() {
        if (!this.olderUsername) {
            const userListShown = this.userListDS.connect().value;
            this.olderUsername = userListShown.find(u => u.dob.age === Math.max.apply(Math, userListShown.map(function (o) { return o.dob.age; }))).login.username;
        } else {
            this.olderUsername = null;
        }
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
