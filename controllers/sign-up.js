const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

const sign_up_get = (req, res) =>
  res.render('sign-up', { errors: false, user: false });
const sign_up_validation = [
  body('f_name', 'First Name must not be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('l_name', 'Last Name must not be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('username', 'Username must not be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .escape(),
  body('re_password')
    .trim()
    .escape()
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;
      if (password !== confirmPassword) {
        throw new Error('Passwords must be same');
      } else {
        return true;
      }
    }),
];
const sign_up_post = [
  ...sign_up_validation,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);

    const hashedPassword = await bcrypt.hash('req.body.password', 10);
    const user = new User({
      f_name: req.body.f_name.toLowerCase(),
      l_name: req.body.l_name.toLowerCase(),
      username: req.body.username.toLowerCase(),
      password: hashedPassword,
    });

    if (!errors.isEmpty()) {
      res.render('sign-up', { user, errors: errors.array() });
    } else {
      await user.save();
      res.redirect('/log-in');
    }
  }),
];

module.exports = {
  sign_up_get,
  sign_up_post,
};
