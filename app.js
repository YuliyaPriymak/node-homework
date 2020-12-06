const express = require('express');

const app = express();

const db = require('./dataBase').getInstance();

db.setModels();

const { userRouter } = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRouter);

app.listen(5000, () => {
    console.log('listen port 5000');
});
