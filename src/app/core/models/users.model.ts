export interface IUser {
    name: {
      first: string,
      last: string
    };
    email: string;
    phone: string;
    picture: {
      large: string
    };
    login: {
        username: string
    };
}