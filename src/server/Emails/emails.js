const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

router.get('/send-email', (req, res) => {
    // getting variables from query
    const { recipient, sender, subject, text } = req.query;
    
    // sendgrid requirements
    const msg = {
        to: recipient,
        from: sender,
        subject: subject,
        text: text
    }

    // send the message
    sgMail.send(msg)
    .then((msg)=>console.log(text))
});

module.exports = router;