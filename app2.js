const express = require('express');
const app = express();

app.get ('/', (req, res) => {
    res.send ('Hello World!')
});

app.get ('/profile', (req, res) => {
    res.send ('This is the profile page!');
})

app.listen(3001);
console.log ('Server running on port 3001');