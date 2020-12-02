const dataBase = require('../dataBase/users');

module.exports = {
    allUsers: () => dataBase,

    insertUser: (user) => {
        dataBase.push(user);
    },

    findUserByEmail: (user_email) => dataBase.find((el) => el.email === user_email),

    deleteUser: (user_email) => dataBase.find((el) => el.email !== user_email)
};
