module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('pages/home');
  });
  
  app.get('/portfolio', function(req, res) {
    res.render('pages/portfolio');
  });
};
