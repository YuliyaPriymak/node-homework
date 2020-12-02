const { userService } = require('../services');
const users = require('../dataBase/users');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const usersList = userService.allUsers();

            res.json(usersList);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: (req, res) => {
        try {
            const user = req.body;

            userService.insertUser(user);
            res.status(201).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserByEmail: (req, res) => {
        try {
            const { user_email } = req.params;
            const user = userService.findUserByEmail(user_email);

            res.status(200).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteCurrentUser: (req, res) => {
        try {
            const { email } = req.body;
            const ListWithoutUser = userService.deleteUser(email);

            res.status(200).json(ListWithoutUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
