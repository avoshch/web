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
            <td> 
                <button onclick="StartEditUser(${user.id})">
                    Edit
                </button>
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
                    <th>
                        Actions
                    </th>
                </tr>
                ${rows}
            </table>

        `;
    }


    editFormToHTML() {
        return ` 
            <div id="edit">
                <form name="editForm" method="post" action="#">
                    <h3> Edit User </h3>
                    <input name="id" type="hidden">
                    <input name="username" placeholder="username"> 
                    <input name="password" placeholder="password">
                    <input name="image" placeholder="avatar url">
                    <button type="button" onclick="EditUser()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }


    toHTML() {
        return this.usersTableToHTML() + this.editFormToHTML() ;
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

        document.addEventListener("editUser", event => {
            super.update(event.detail.id, event.detail);
            this.render();
        });

        
    }
}


function EditUser() {
    const id = parseInt(document.getElementsByName("id")[0].value);
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const image = document.getElementsByName("image")[0].value;
    let editUserEvent = new CustomEvent("editUser", {
        detail: {
            id,
            username,
            password,
            image
        }
    });
    document.dispatchEvent(editUserEvent);
}


function StartEditUser(id) {
    document.getElementById("edit").style.display = "block";
    
    let user = users.getById(id);
    document.getElementsByName("id")[0].value = user.id;
    document.getElementsByName("username")[0].value = user.username;
    document.getElementsByName("password")[0].value = user.password;
    document.getElementsByName("image")[0].value = user.image;
    
}