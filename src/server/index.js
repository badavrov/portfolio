const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./Projects/routes'));

app.use(express.static('dist'));


app.listen(port, () => console.log('Listening on port '+port));
module.exports = app;
