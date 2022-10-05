export class User {
    public id: number;
    public username: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public birthday: string;
    public address: string;
    public password: string;
    public image: string;



    constructor(username, email, firstName, lastName, birthday, address) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
    }
}