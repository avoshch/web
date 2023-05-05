
class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        if (value.length < 3)
            throw "Password to short";
        this._password = value;
    }
}

class UserWithImage extends User {
    constructor(username, password, image) {
        super(username, password);
        this.image = image;
    }

}
