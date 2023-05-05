class UsersWithDOM extends Users {
    userToHTML(user) {
        return `
        <tr>
            <td>
                ${user.id}
            </td>
            <td>
                ${user.username}
            </td>
            <td>
                ${"*".repeat(user.password?.length)}
            </td>
            <td>
                <img
                    src="${user.image}"
                    alt="${user.username}"
                    class="avatar"
                />
            </td>
        </tr>
        `;
    }

    usersTableToHTML() {
        let rows = "";
        for (let user of this.getAll()) {
            rows += this.userToHTML(user);
        }
        return `
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Avatar
                    </th>
                </tr>
                ${rows}
            </table>
            <button type="button" onclick="ShowAddUser()">
                Add user
            </button>

        `;
    }

    addFormToHTML() {
        return ` 
            <div id="add">
                <form name="addForm" method="post" action="#">
                    <h3> Add User </h3>
                    <input name="id" type="hidden">
                    <input name="username" placeholder="username"> 
                    <input name="password" placeholder="password">
                    <input name="image" placeholder="avatar url">
                    <button type="button" onclick="AddNewUser()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }

    toHTML() {
        return this.usersTableToHTML() + this.addFormToHTML();
    }


    mount(parrent) {
        this._parrent = parrent;
        this.render();
        this.addEventListners();
    }

    render() {
        this._parrent.innerHTML = this.toHTML();
    }

    addEventListners() {


        document.addEventListener("addUser", event => {
            super.add(
                new UserWithId(
                    event.detail.username,
                    event.detail.password,
                    event.detail.image
                )
            );
            this.render();
        });


        
    }
}


function ShowAddUser() {
    document.getElementById("add").style.display = "block";
}


function AddNewUser() {
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const image = document.getElementsByName("image")[0].value;
    let addUserEvent = new CustomEvent("addUser", {
        detail: {
            username, //username: username
            password,
            image
        }
    });
    document.dispatchEvent(addUserEvent);
}