

let idCounter = 0;
class UserWithId extends UserWithImage {
    constructor(username, password, image) {
        super(username, password, image);
        this._id = idCounter++;
    }

    get id() {
        return this._id;
    }
}

class Users {
    constructor() {
        this.items = [];
    }

    get count() {
        return this.items.length;
    }

    add(user) {
        if (!(user instanceof UserWithId))
            throw `${user} is not instance of UserWithId`;
        this.items.push(user);
    }

    getById(id) {
        return this.items.find(user => user.id == id);
    }

    getByUsername(username) {
        return this.items.find(user => user.username == username);
    }

    getShortUsernames(len) {
        return this.items.filter(user => user.username.length <= len);
    }

    getAll() {
        return [...this.items];
    }

    update(id, newUser) {
        let user = this.getById(id);
        if (!user)
            throw "Not found";

        for (let key of ["username", "password", "image"])
            if (newUser[key])
                user[key] = newUser[key];
    }

    delete(id){
        let userIndex = this.items.findIndex(user => user.id == id);
        if (userIndex == -1)
            throw "Not found";
        this.items.splice(userIndex, 1);
    }
}
