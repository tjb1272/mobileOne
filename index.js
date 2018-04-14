const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;
const https = require('https');

app.get('/home', (req, res) => {
    res.render('home');
});

//BodyParsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(3000, () => {
    console.log('server running')
});