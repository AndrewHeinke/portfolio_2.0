module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('pages/home');
  });

  app.get('/portfolio', function(req, res) {
    res.render('pages/portfolio');
  });

  app.get('/resume', function(req, res) {
    res.render('pages/resume');
  });

  app.get('/contact', function(req, res) {
    res.render('pages/contact');
  });
};
