var express = require('express');
var router = express.Router();
const {
  message_get,
  message_post,
  message_delete,
} = require('../controllers/message');

router.get('/', message_get);
router.post('/', message_post);
router.delete('/:id', message_delete);

module.exports = router;
