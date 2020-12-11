const { Router } = require('express');

const { userController } = require('../../controllers');
const { userMiddleware, validationMiddleware } = require('../../middlewares');

const userRouter = Router();

userRouter.get('/', userController.findAll);

userRouter.post('/', validationMiddleware.isUserCreateCorrect, userController.createUser);

userRouter.use('/:userId', validationMiddleware.isIdCorrect, userMiddleware.checkIsUserRegisteredById);

userRouter.get('/:userId', userController.findById);

// userRouter.put('/:userId', validationMiddleware.isUserUpdateCorrect, userController.findById);
// userRouter.delete('/:userId', userController.findById);

// userRouter.post('/', userMiddleware.isUserExist, userController.createUser);
//
// userRouter.get('/:email', userMiddleware.isEmail, userController.getUserByEmail);
//
// userRouter.delete('/:userId', userMiddleware.isEmail, userController.deleteCurrentUser);

module.exports = userRouter;
