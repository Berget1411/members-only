var express = require('express');
var router = express.Router();
const { sign_up_get, sign_up_post } = require('../controllers/sign-up');

router.get('/', sign_up_get);
router.post('/', sign_up_post);

module.exports = router;
