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

        `;
    }

    toHTML() {
        return this.usersTableToHTML() ;
    }

    mount(parrent) {
        this._parrent = parrent;
        parrent.innerHTML = this.toHTML();
    }
}