const db = require('../../dataBase').getInstance();

module.exports = {
    selectAllUsers: (where = {}, limit = 10, offset = 0) => {
        const User = db.getModel('User');
        const Car = db.getModel('Car');

        return User.findAll({
            where,
            include: [{ model: Car }],
            limit,
            offset
        });
    },

    selectById: (userId) => {
        const User = db.getModel('User');
        const Car = db.getModel('Car');

        return User.findByPk(userId, { include: Car });
    },

    insertUser: (user) => {
        const User = db.getModel('User');

        return User.create(user);
    }

    // findUsers: () => {
    //     const UserModel = db.getModel('User');
    //     const CarModel = db.getModel('Car');
    //
    //     return UserModel.findAll({
    //         include: [{ model: CarModel, as: 'car' }]
    //     });
    // },

    // insertUser: (name, email, password, age) => {
    //     const UserModel = db.getModel('User');
    //
    //     return UserModel.create(name, email, password, age);
    // },
    //
    // findUserByEmail: (email) => {
    //     const UserModel = db.getModel('User');
    //     const CarModel = db.getModel('Car');
    //
    //     return UserModel.findAll({
    //         where: {
    //             email
    //         },
    //         include: [{
    //             model: CarModel,
    //             as: 'car',
    //             attributes: ['car_name']
    //         }]
    //     });
    // },
    //
    // deleteUser: (userId) => {
    //     const UserModel = db.getModel('User');
    //
    //     return UserModel.destroy({
    //         where: {
    //             id: userId
    //         }
    //     });
    // },
};
