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
                <button onclick="DeleteUser(${user.id})">
                    Delete
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

    toHTML() {
        return this.usersTableToHTML() ;
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
        document.addEventListener("deleteUser", event => {
            super.delete(event.detail.id);
            this.render();
        });
        
    }
}

function DeleteUser(id) {
    let deleteUserEvent = new CustomEvent("deleteUser", { detail: { id } });
    document.dispatchEvent(deleteUserEvent);
}
