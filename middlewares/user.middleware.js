const db = require('../dataBase').getInstance();

module.exports = {
    isUserExist: (req, res, next) => {
        try {
            const { email } = req.body;
            const newUser = db.getModel('User');

            newUser.findAll({
                where: {
                    email
                }
            });

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
            const user = db.getModel('User');

            user.findAll({
                where: {
                    email
                }
            });

            if (!user) {
                throw new Error('User does not exist');
            }

            next();
        } catch (e) {
            res.status(401).json(e.message);
        }
    }
};
