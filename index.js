const express = require('express');
const app = express();
const session = require('cookie-session');
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
const port = process.env.PORT || 3000;
const path = require('path');


//Engines
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//Express Session
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));

app.listen(3000, () => {
    console.log('server running')
});