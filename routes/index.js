const express = require('express');
const router = express.Router();

router.use(require('./resume.route'));

module.exports = router;