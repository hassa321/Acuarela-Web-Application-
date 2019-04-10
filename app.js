var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');
var expressValidator = require('express-validator');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');
var upload = multer({dest:'./uploads'});
var flash = require('connect-flash');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connection;

var User = require('./models/user');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');*/

// var { Ad } = require('./models/ad');
// var { User } = require('./models/user');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//handle sessions
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    ,root = namespace.shift()
    ,formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']'
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

//router
app.get('/signin', function(req, res, next) {
  res.sendFile(__dirname + '/public/signin.html');
});
app.get('/register', function(req, res, next) {
  res.sendFile(__dirname + '/public/register.html');
});
app.post('/register', function(req, res, next) {
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;
  var confirm_password = req.body.comfirm;
  var gender = req.body.gender;
  if(req.body.phone){
    var phone = req.body.phone;
  }else{
    var phone = '';
  }
  var email = req.body.email;
  if(req.body.campus){
    var campus = req.body.campus;
  }else{
    var campus = '';
  }
  req.checkBody('name', 'Name filed is empty').notEmpty();
  req.checkBody('email', 'Email field is empty').notEmpty();
  req.checkBody('username', 'Username field is empty').notEmpty();
  req.checkBody('password', 'Password field is empty').notEmpty();
  req.checkBody('confirm', 'Confirm password field is empty').notEmpty();
  req.checkBody('gender', 'Gender field is empty').notEmpty();
  req.checkBody('password', 'Password must be at least 3 characters').isLength({min: 3});
  req.checkBody('confirm', 'Passwords do not match').equals(password);
  var err = req.validationErrors();
  if(err){
    res.sendFile(__dirname +'/public/register.html', {errors: err});
    console.log(err);
  }else{
    var newUser = new User({
      name: name,
      username: username,
      password: password,
      gender: gender,
      phone: phone,
      email: email,
      campus: campus,
      status: 1
    });
    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });
    req.flash('success', 'Registered');
    res.location('/');
    res.redirect('/');
  }
});

app.get('/post', function(req, res, next) {
  res.sendFile(__dirname + '/public/post.html');
});
app.post('/post', upload.single('photo'), function(req, res, next) {

});
app.get('/admin', function(req, res, next) {
  res.sendFile(__dirname + '/public/admin.html');
});
app.get('/profile', function(req, res, next) {
  res.sendFile(__dirname + '/public/profile.html');
});

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
