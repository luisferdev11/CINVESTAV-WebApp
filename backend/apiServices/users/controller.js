const userModel = require("./model");

module.exports = {
    async getUsers(req, res) {
        const users = await userModel.getUsers();

        return res.send(users);
    },

    async getUser(req, res) {
        const user = await userModel.getUser(req.params.id);
        if (!user) return res.sendStatus(404);

        return res.send(user);
    },

    async createUser(req, res) {
        if (!req.body.appat) return res.sendStatus(400);
        if (!req.body.apmat) return res.sendStatus(400);
        if (!req.body.nom) return res.sendStatus(400);
        if (!req.body.correo) return res.sendStatus(400);
        if (!req.body.pswd) return res.sendStatus(400);
        if (!req.body.idPermiso) return res.sendStatus(400);
        if (!req.body.idEscuela) return res.sendStatus(400);

        const users = await userModel.createUser({
            appat: req.body.appat,
            apmat: req.body.apmat,
            nom: req.body.nom,
            correo: req.body.correo,
            pswd: req.body.pswd,
            idPermiso: req.body.idPermiso,
            idEscuela: req.body.idEscuela,
        });

        return res.send(users);
    },

    // async updateUser(req, res) {
    //     if (!req.body.username) return res.sendStatus(400);
    //     if (!req.body.email) return res.sendStatus(400);
    //     const user = await userModel.getUser(req.params.id);
    //     if (!user) return res.sendStatus(404);

    //     await userModel.updateUser(req.params.id, {
    //         username: req.body.username,
    //         email: req.body.email,
    //     });

    //     return res.sendStatus(204);
    // },

    async deleteUser(req, res) {
        await userModel.deleteUser(req.param.id);
        res.sendStatus(204);
    },
};
