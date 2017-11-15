const express = require('express');
const router = express.Router();

router.use(require('./resume.route'));
router.use(require('./contact.route'));

module.exports = router;