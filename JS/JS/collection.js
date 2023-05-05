

let idCounter = 0;

class User {

    constructor(username, password) {
        this.username=username;
        this.password=password;
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
        if (!(user instanceof User))
            throw `${user} is not instance of User`;
        this.items.push(user);
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
        if (!(user instanceof User))
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

        for (let key of ["username", "password"])
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

 let users = new Users();
 let admin= new User("admin","password");
 users.add(admin);



// let firstUser = users.getByUsername("admin");

let firstUser = users.getById(0);

  users.update(0, {
     username: firstUser.password,
     password: "admin!!1",
     
 });


 let adminId = users.getByUsername("admin").id;
  users.delete(adminId);

