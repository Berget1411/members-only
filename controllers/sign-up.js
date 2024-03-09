const User = require('../models/user');

const sign_up_get = (req, res) => res.render('sign-up');
const sign_up_post = async (req, res) => {
  try {
    const user = new User({
      f_name: req.body.f_name.toLowerCase(),
      l_name: req.body.l_name.toLowerCase(),
      username: req.body.username.toLowerCase(),
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  sign_up_get,
  sign_up_post,
};
