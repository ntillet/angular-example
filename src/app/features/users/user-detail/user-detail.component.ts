import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { User } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
    private subscriptions = new Subscription();
    private username: string;

    // Another approach for this kind of example is to use an embedded toolbar with an input "user" and just change the input (avoiding routing)
    // In my experience I've used both but this makes the page more flexible to change url directly on the browser by typing (or saving bookmarks)
    user: User;
    isEditing = false;
    editForm: FormGroup;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get("username");
        this.isEditing = JSON.parse(this.route.snapshot.paramMap.get("isEditing"));

        this.editForm = this.fb.group({
            name: this.fb.group({
                first: [null, Validators.required],
                last: [null, Validators.required]
            }),
            email: [null],
            phone: [null],
            picture: this.fb.group({
                thumbnail: [null]
            }),
            login: this.fb.group({
                username: [null, Validators.required]
            }),
            location: this.fb.group({
                street: [null, Validators.required],
                city: [null, Validators.required],
                state: [null, Validators.required]
            })
        });

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
                        this.editForm.patchValue(this.user);
                    }
                })
        );
    }

    edit(isEdit = true) {
        if (!isEdit) {
            this.editForm.patchValue(this.user);
        }
        this.isEditing = isEdit;
    }

    save() {
        const userAux = new User(this.editForm.value);
        this.usersService.saveUser(userAux);
        this.isEditing = false;
    }

    delete() {
        this.usersService.deleteUser(this.user.login.username);
        this.back();
    }

    back() {
        this.router.navigate(['/users/list']);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
