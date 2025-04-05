const morgan = require ('morgan');
const express = require('express');
const userModel = require ('./models/user');

const app = express();
const dbConnection = require ('./config/db');

app.use(morgan('dev'));;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

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

app.get ('/register', (req, res) => {
    res.render ('register');
});

app.get ('/get-users', (req, res) => {
    userModel.find().then((users) => {
        res.send (users);
    })
});

app.post ('/register', async (req, res) => {
    const {username, email, password} = req.body;

    const newUser = await userModel.create ({
        username: username,
        email: email,
        password: password
    });
    res.send (newUser);
});

app.get ('/update-user', async (req, res) => {
    await userModel.findOneAndUpdate ({
        username: 'a'
    }, {
        email: "paneer@gmail.com"
    });

    res.send ('User Updated!');
});

app.get ('/delete-user', async (req, res) => {
    await userModel.findOneAndDelete ({
        username: 'a'
    })

    res.send ('User Deleted!');
});

app.post ('/get-form-data', (req, res) => {
    console.log (req.body);
    res.send ('Data Received!');
});

app.listen(3002);
console.log ('Server running on port 3002');