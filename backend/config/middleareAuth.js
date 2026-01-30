const passport = require('passport');

module.exports = () => (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({
        error: 'Não autorizado',
        details: info?.message || 'Token inválido ou ausente'
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};