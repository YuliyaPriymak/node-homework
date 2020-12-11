const { Router } = require('express');
const { carController } = require('../../controllers');

const carRouter = Router();

carRouter.post('/', carController.createCar);

module.exports = carRouter;
