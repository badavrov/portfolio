const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const sgMail = require('@sendgrid/mail');
require('dotenv').config()

const port = process.env.PORT || 8080;

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/* The API key cant be deployed to Github pages. (currently dissabled) */
// sgMail -for email sending
// sgMail.setApiKey(process.env.SECRET_KEY);

// Routes
app.use('/api', require('./Projects/routes'));
/* The API key cant be deployed to Github pages. (currently dissabled) */
// app.use('/api', require('./Emails/emails'));

app.use(express.static('dist'));

app.listen(port, () => console.log('Listening on port '+port));
module.exports = app;
