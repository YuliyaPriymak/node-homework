const { userService } = require('../services');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const usersList = await userService.findUsers();

            res.status(200).json(usersList);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const {
                name, email, password, age
            } = req.body;

            await userService.insertUser(name, email, password, age);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserByEmail: async (req, res) => {
        try {
            const { email } = req.params;

            const user = await userService.findUserByEmail(email);

            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteCurrentUser: async (req, res) => {
        try {
            const { userId } = req.body;
            const ListWithoutUser = await userService.deleteUser(userId);

            res.status(200).json(ListWithoutUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
