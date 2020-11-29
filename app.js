const usersArr = [
    { name: 'Olga', email: 'Olga@gmail.com', password: 1111 },
    { name: 'Dima', email: 'Dima@gmail.com', password: 2222 },
    { name: 'Kolya', email: 'Kolya@gmail.com', password: 3333 },
    { name: 'Vika', email: 'Vika@gmail.com', password: 4444 },
];

let isLogin = false;

const express = require('express');
const expressHb = require('express-handlebars');

const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHb({ defaultLayout: false }));

app.set('views', path.join(process.cwd(), 'views'));

app.get('/', ((req, res) => {
    res.render('main');
}));

app.get('/reg', ((req, res) => {
    res.redirect('registration');
}));

app.get('/registration', ((req, res) => {
    res.render('registration');
}));

app.post('/registr', ((req, res) => {
    const { name, email, password } = req.body;
    const user = usersArr.find((el) => el.email === email);
    if (user) {
        return res.render('error', { text: 'this email is exist all ready' });
    }
    isLogin = true;
    usersArr.push({ name, email, password });
    res.redirect('users');
}));

app.get('/log', ((req, res) => {
    res.render('login');
}));

app.post('/auth', ((req, res) => {
    const { email, password } = req.body;
    const user = usersArr.find((el) => el.email === email);
    if (!user) {
        return res.render('error', { text: 'Wrong email!' });
    }
    if (user.password !== password) {
        return res.render('error', { text: 'Wrong password!' });
    }
    isLogin = true;
    res.render('users', { users: usersArr });
}));

app.get('/users', ((req, res) => {
    if (isLogin) {
        return res.render('users', { users: usersArr });
    }
    return res.render('error', { text: 'You must log in!' });
}));

app.get('/logout', ((req, res) => {
    isLogin = false;
    res.redirect('/');
}));

app.listen(3000);
