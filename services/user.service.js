const db = require('../dataBase').getInstance();

module.exports = {
    findUsers: () => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findAll({
            include: [{ model: CarModel, as: 'car' }]
        });
    },

    insertUser: (name, email, password, age) => {
        const UserModel = db.getModel('User');

        return UserModel.create(name, email, password, age);
    },

    findUserByEmail: (email) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findAll({
            where: {
                email
            },
            include: [{
                model: CarModel,
                as: 'car',
                attributes: ['car_name']
            }]
        });
    },

    deleteUser: (userId) => {
        const UserModel = db.getModel('User');

        return UserModel.destroy({
            where: {
                id: userId
            }
        });
    },
};
