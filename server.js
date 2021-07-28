// require express.js package
const { dirxml } = require('console');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// use env port 
const PORT = process.env.PORT || 3001;

// instantiate server
const app = express();

// public folder middleware
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// make server listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});