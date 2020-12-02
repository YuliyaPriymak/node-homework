const users = require('../dataBase/users');

module.exports = {
    isUserExist: (req, res, next) => {
        try {
            const { email, password } = req.body;
            const newUser = users.find((el) => el.email === email || el.password === password);

            if (newUser) {
                throw new Error('This user is exist all ready');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    isEmail: (req, res, next) => {
        try {
            const { email } = req.body;
            const userEmail = users.find((el) => el.email === email);

            if (!userEmail) {
                throw new Error('Wrong email');
            }

            next();
        } catch (e) {
            res.status(401).json(e.message);
        }
    },

    isPassword: (req, res, next) => {
        try {
            const { password } = req.body;
            const userPassword = users.find((el) => el.password === password);

            if (!userPassword) {
                throw new Error('Wrong password');
            }

            next();
        } catch (e) {
            res.status(401).json(e.message);
        }
    }
};
