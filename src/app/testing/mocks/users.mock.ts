import { User } from 'src/app/core/models/users.model';

export const mockUsers: User[] = [
    new User({
        name: {
            first: 'User 1',
            last: 'Lastname 1'
        },
        location: {
            street: '5258 aleksanterinkatu',
            city: 'kaarina',
            state: 'tavastia proper',
        },
        email: 'amanda.salmela@example.com',
        login: {
            username: 'tinyduck287'
        },
        dob: {
            date: new Date('1957-04-15T08:01:19Z'),
            age: 62
        },
        phone: '04-050-031',
        picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
        }
    }),
    new User({
        name: {
            first: 'User 2',
            last: 'Lastname 2'
        },
        location: {
            street: '5258 aleksanterinkatu',
            city: 'kaarina',
            state: 'tavastia proper',
        },
        email: 'amanda.salmela@example.com',
        login: {
            username: 'tinyduck287'
        },
        dob: {
            date: new Date('1957-04-15T08:01:19Z'),
            age: 30
        },
        phone: '04-050-031',
        picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
        }
    }),
    new User({
        name: {
            first: 'OLDER',
            last: 'OLDER'
        },
        location: {
            street: '5258 aleksanterinkatu',
            city: 'kaarina',
            state: 'tavastia proper',
        },
        email: 'amanda.salmela@example.com',
        login: {
            username: 'OLDERUSERNAME'
        },
        dob: {
            date: new Date('1957-04-15T08:01:19Z'),
            age: 80
        },
        phone: '04-050-031',
        picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
        }
    }),
    new User({
        name: {
            first: 'User 4',
            last: 'Lastname 4'
        },
        location: {
            street: '5258 aleksanterinkatu',
            city: 'kaarina',
            state: 'tavastia proper',
        },
        email: 'amanda.salmela@example.com',
        login: {
            username: 'tinyduck287'
        },
        dob: {
            date: new Date('1957-04-15T08:01:19Z'),
            age: 25
        },
        phone: '04-050-031',
        picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
        }
    })
]