const express = require('express');

const router = express.Router();


router.get('/project', (req, res) => {
  res.status(200).send('helolo');
});

module.exports = router;