const userDao = require("./dao");

module.exports = {
    async getUsers() {
        return userDao.getUsers();
    },

    async getUser(id) {
        return userDao.getUser(id);
    },

    async createUser(user) {
        return userDao.createUser(user);
    },

    async updateUser(id, { email, username }) {
        return userDao.updateUser(id, { email, username });
    },

    async deleteUser(id) {
        return userDao.deleteUser(id);
    },
};
