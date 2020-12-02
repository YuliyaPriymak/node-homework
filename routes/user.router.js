const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.post('/', userMiddleware.isUserExist, userController.createUser);

userRouter.get('/:email', userMiddleware.isEmail, userMiddleware.isPassword, userController.getUserByEmail);

userRouter.delete('/:email', userMiddleware.isEmail, userController.deleteCurrentUser);

module.exports = userRouter;
