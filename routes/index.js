var express = require('express');
var router = express.Router();
const Message = require('../models/message');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const messages = await Message.find();

  res.render('index', {
    messages: messages,
  });
  console.log(req.body);
});

module.exports = router;
