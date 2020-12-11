const express = require('express');

const app = express();

const db = require('./dataBase');

db.getInstance().setModels();

const { userRouter, carRouter } = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRouter);
app.use('/cars', carRouter);

app.listen(5000, () => {
    console.log('listen port 5000');
});
