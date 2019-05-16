const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const port = process.env.PORT || 8080;

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// sgMail -for email sending
sgMail.setApiKey('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');

// Routes
app.use('/api', require('./Projects/routes'));
app.use('/api', require('./Emails/emails'));

app.use(express.static('dist'));

app.listen(port, () => console.log('Listening on port '+port));
module.exports = app;
