const { carService } = require('../../services');

module.exports = {
    createCar: async (req, res) => {
        try {
            await carService.insertCar(req.body);

            res.sendStatus(201);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
