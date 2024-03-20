const Message = require('../models/message');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

const message_get = (req, res) => {
  if (req.body._id) {
    res.render('create-message', { errors: false, message: false });
  } else {
    res.redirect('/');
  }
};

const message_validation = [
  body('title', 'Title should be between 1 and 50 characters')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('description', 'Title should be between 10 and 100 characters')
    .trim()
    .isLength({ min: 10 })
    .escape(),
];
const message_post = [
  ...message_validation,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    const message = new Message({
      title: req.body.title.toLowerCase(),
      description: req.body.description.toLowerCase(),
      author: req.user.username,
    });

    if (!errors.isEmpty()) {
      console.log('lol');
      res.render('create-message', { message, errors: errors.array() });
    } else {
      console.log('created post');
      await message.save();
      res.redirect('/');
    }
  }),
];

const message_delete = (req, res) => {
  const id = req.params.id;
  Message.findByIdAndDelete(id)
    .then((result) => [res.json({ redirect: '/' })])
    .catch((err) => console.log(err));
};

module.exports = {
  message_get,
  message_post,
  message_delete,
};
