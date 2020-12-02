const express = require('express');

const app = express();

const { userRouter } = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRouter);

app.listen(3000);
