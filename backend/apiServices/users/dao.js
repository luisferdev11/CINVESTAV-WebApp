const pool = require("../../services/MySQL");

module.exports = {
    async getUsers() {
        const users = JSON.stringify(await pool.query("select * from usuario"));
        return users;
    },

    async getUser(id) {
        const user = JSON.stringify(
            await pool.query(`select * from usuario where idUsuario=${id}`)
        );
        return user;
    },

    async createUser(user) {
        const users = JSON.stringify(
            await pool.query(
                `INSERT INTO usuario (appat, apmat, nom, correo, pswd, idPermiso, idEscuela) VALUES ("${user.appat}", "${user.apmat}", "${user.nom}", "${user.correo}", "${user.pswd}", ${user.idPermiso}, ${user.idEscuela});`
            )
        );
        return users;
    },

    // Actualizar este caso de uso, aun no es vitalmente necesario

    async updateUser(id, { email, username }) {
        const update = { $set: { email, username } };

        return new Promise((resolve, reject) =>
            userCollection.update({ _id: id }, update, {}, (err, docs) => {
                if (err) return reject(err);
                return resolve(docs);
            })
        );
    },

    async deleteUser(id) {
        const result = await pool.query(
            "DELETE FROM usuario WHERE idUsuario = ?",
            [id],
            (err, rows, fields) => {
                if (!err) {
                    return { status: "Deleted" };
                } else {
                    console.log(err);
                    return { err };
                }
            }
        );
    },
};
