var express = require('express');
var router = express.Router();
const { message_get, message_post } = require('../controllers/message');

router.get('/', message_get);
router.post('/', message_post);

module.exports = router;
