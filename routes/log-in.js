var express = require('express');
var router = express.Router();
const { log_in_get, log_in_post } = require('../controllers/log-in');

router.get('/', log_in_get);
router.post('/', log_in_post);

module.exports = router;
