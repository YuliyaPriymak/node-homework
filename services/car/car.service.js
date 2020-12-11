const db = require('../../dataBase').getInstance();

module.exports = {
    insertCar: (car) => {
        const Car = db.getModel('Car');

        return Car.create(car);
    }
};
