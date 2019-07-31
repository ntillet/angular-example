export class User {
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    name: {
        first: string,
        last: string
    };
    email: string;
    phone: string;
    picture: {
        thumbnail: string
    };
    login: {
        username: string
    };
    location: {
        street: string,
        city: string,
        state: string,
    }
    dob: {
        date: Date,
        age: number
    }

    get fullname(): string {
        return this.name.last + ', ' + this.name.first;
    }
    get fullAddress(): string {
        return this.location.street + ', ' + this.location.city + ', ' + this.location.state;
    }
}