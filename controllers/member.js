const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
require('dotenv').config();

const become_member_get = (req, res) =>
  res.render('become-member', { errors: false });

member_validation = [
  body('key')
    .trim()
    .escape()
    .custom(async (enteredKey) => {
      const key = process.env.MEMBER_KEY;
      if (key !== enteredKey) {
        throw new Error('Wrong Key!');
      } else {
        return true;
      }
    }),
];

const become_member_post = [
  ...member_validation,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('become-member', { errors: errors.array() });
    } else {
      const user = await User.findOneAndUpdate(
        { _id: req.user._id },
        { isMember: true }
      );
      await user.save();
      res.redirect('/');
    }
  }),
];

module.exports = {
  become_member_get,
  become_member_post,
};
