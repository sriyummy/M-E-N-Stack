const mongoose = require ('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/M-E-N').then(() => {
    console.log ('Connected to MongoDB');
}).catch((err) => {
    console.error ('Error connecting to MongoDB:', err);
});

module.exports = connection;