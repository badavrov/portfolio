const express = require('express');
const os = require('os');

const app = express();
const bodyParser = require('body-parser');

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(require('./Users/routes'));

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(8080, () => console.log('Listening on port 8080!'));
module.exports = app;
