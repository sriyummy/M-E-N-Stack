const http = require ('http');

const server = http.createServer ((req, res) => {
    if (req.url == '/about') {
        res.end ('The about page!');
    }
    else if (req.url == '/contact') {
        res.end ('This is the contact page!');
    }
    else if (req.url == '/') {
        res.end ('Welcome to the home page!');
    }
});

server.listen(3000);
console.log ('Server is running on port 3000');