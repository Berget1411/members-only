var express = require('express');
var router = express.Router();
const {
  become_member_get,

  become_member_post,
} = require('../controllers/member');

router.get('/', become_member_get);
router.post('/', become_member_post);

module.exports = router;
