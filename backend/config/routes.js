// const user = require('../api/user') ;
const admin = require('./admin');
const auth = require('./middleareAuth');
module.exports = (app) => {
  app.post('/signup', app.api.user.save);
  app.post('/signin', app.api.auth.signin);
  app.post('/validateToken', app.api.auth.validateToken);

  app.route('/users')
    .all(auth())
    .post(admin(app.api.user.save))
    .get(admin(app.api.user.get))

  app.route('/users/:id')
    .all(auth())
    .put(admin(app.api.user.save))
    .get(admin(app.api.user.getById))
    .delete(admin(app.api.user.remove))

  app.route('/categories')
    .all(auth())
    .get(admin(app.api.category.get))
    .post(admin(app.api.category.save))

  app.route('/categories/tree')
    .all(auth())
    .get(app.api.category.getTree)

  app.route('/categories/:id')
    .all(auth())
    .get(app.api.category.getById)
    .put(admin(app.api.category.save))
    .delete(admin(app.api.category.remove))

  app.route('/articles')
    .all(auth())
    .get(app.api.article.get)
    .post(admin(app.api.article.save))

  app.route('/articles/:id')
    .all(auth())
    .get(app.api.article.getById)
    .put(admin(app.api.article.save))
    .delete(admin(app.api.article.remove))

  app.route('/categories/:id/articles')
    .all(auth())
    .get(app.api.article.getByCategory)

  app.route('/stats')
    .all(auth())
    .get(app.api.stats.get)

}