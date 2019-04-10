const express = require('express');

const router = express.Router();


router.post('/api/users', (req, res) => {
  res.status(400).send('helolo');
});

module.exports = router;
