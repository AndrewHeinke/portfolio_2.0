var express = require('express');
var app = express();

//establish the port to listen on
var PORT = process.env.PORT || 4444;

var morgan = require('morgan');
var bodyParser = require('body-parser');

// variables for sass middleware to compile to css
var sassMiddleware = require('node-sass-middleware');
var serveStatic = require('serve-static');
var srcPath = __dirname + '/public/sass';
var destPath = __dirname + '/public/css';

// log requests to the console
app.use(morgan('dev'));

//Configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// set up ejs for templating
app.set('view engine', 'ejs');

// auto compiles sass to css
app.use('/css',
  sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'compressed',
  })
);

//serve static content from the public directory
app.use('/',
  serveStatic('./public', {})
);

// load routes and configured passport
require('./app/routes.js')(app);

//listen on the assigned port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
