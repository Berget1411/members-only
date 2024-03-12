const User = require('../models/user');
const bcrypt = require('bcryptjs');

const sign_up_get = (req, res) => res.render('sign-up');
const sign_up_post = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
      } else {
        const user = new User({
          f_name: req.body.f_name.toLowerCase(),
          l_name: req.body.l_name.toLowerCase(),
          username: req.body.username.toLowerCase(),
          password: hashedPassword,
        });
        const result = await user.save();
        res.redirect('/log-in');
      }
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  sign_up_get,
  sign_up_post,
};
