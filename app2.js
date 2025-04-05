const morgan = require ('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'));;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get ('/', (req, res, next) => {
        const a = 5;
        const b = 10;
        console.log (a+b);

        next();
    }, (req, res) => {
        res.render ('index');
    });

app.get ('/profile', (req, res) => {
    res.send ('This is the profile page!');
});

app.post ('/get-form-data', (req, res) => {
    console.log (req.body);
    res.send ('Data Received!');
});

app.listen(3002);
console.log ('Server running on port 3002');