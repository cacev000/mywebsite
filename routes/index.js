const express = require('express');
const router = express.Router();

router.use(require('./resume.route'));
router.use(require('./contact.route'));
router.use(require('./portfolio.route'));

module.exports = router;