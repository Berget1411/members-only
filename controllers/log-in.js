const passport = require('passport');

const log_in_get = (req, res) => res.render('log-in');
const log_in_post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/log-in',
});

module.exports = {
  log_in_get,
  log_in_post,
};
