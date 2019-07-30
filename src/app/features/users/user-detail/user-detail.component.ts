import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IUser } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
    private subscriptions = new Subscription();

    // Another approach for this kind of example is to use an embedded toolbar with an input "user" and just change the input (avoiding routing)
    // In my experience I've used both but this makes the page more flexible to change url directly on the browser by typing (or saving bookmarks)
    user: IUser;
    username: string;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute
    ) {
        this.subscriptions.add(
            this.usersService.fetchUserList()
                .subscribe((userList) => {
                    // Guards will MAKE SURE that you get an existing username and that list exists
                    // but just in case for this example I'll add a way to reload the list in case
                    // that you enter directly
                    if (userList === null) {
                        this.usersService.loadUserList();
                    } else {
                        this.user = userList.find(q => q.login.username === this.username);
                    }
                })
        );
    }

    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get("username")
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
