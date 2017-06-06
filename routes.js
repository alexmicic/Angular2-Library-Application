// grab the models
var User = require('./model/user');
var Book = require('./model/book');
var Rent = require('./model/rent');

// plugins
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports = function(app) {

  // Authenticate ===
  app.post('/api/authenticate', function (req, res) {
    try {
      User.findOne({ 'email': req.body.email }, function (err, User) {
        if (err)
          res.status(422).send(err);

        if (!User) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (User) {

          // check if password matches
          var comparePass = bcrypt.compareSync(req.body.password, User.password);

          if (!comparePass) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {

            // if user is found and password is right
            // create a token
            var token = jwt.sign(User, app.get('superSecret'), {
              expiresIn: 60*60*24 // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token,
              admin: User.admin,
              id: User._id
            });
          } 

        }

      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Middleware ===
  app.use('/api', function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token;
    // var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      token = req.query.token;
    }

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });

    }
  });

  // User ===
  // get all REGULAR Users
  app.get('/api/users', function (req, res) {
    User.find({ 'admin': { $ne: true }}, function (err, Users) {
      if (err)
        res.status(400).send(err);

      res.json(Users);
    })
  });

  // get User by id
  app.get('/api/users/:id', function (req, res) {
    try {
      User.findOne({ '_id': req.params.id }, function (err, User) {
        if (err)
          res.status(422).send(err);

        res.json(User);
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // add new User
  function createUser(req, callback) {
    var saltRounds = 5;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hashPassword = bcrypt.hashSync(req.body.password, salt);

    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateCreated: req.body.dateCreated || Date.now(),
      phone: req.body.phone,
      email: req.body.email,
      password: hashPassword,
      admin: req.body.admin || false
    }).save();

    callback();
  }

  app.post('/api/users', function (req, res) {
    try {

      User.findOne({ 'email': req.body.email }, function(err, User){
        if (err)
          res.status(422).send(err);
        
        if (!User) {
          createUser(req, function() {
            res.json({
              success: true,
              message: 'New User added sucessfully.'
            })
          });

        } else {
          res.json({
            success: false,
            message: 'User with this email address already exist.'
          })
        }

      });

    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update a User
  app.put('/api/users/:id', function (req, res) {
    try {
      User.findById({ '_id': req.params.id }, function(err, User){
        if (err)
          res.status(422).send(err);

        var saltRounds = 5;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hashPassword = bcrypt.hashSync(req.body.password, salt);

        // if password is the same DO NO UPDATE IT
        if (req.body.password === User.password) {
          hashPassword = req.body.password;
        }

        User.update({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dateCreated: req.body.dateCreated || Date.now(),
          phone: req.body.phone,
          email: req.body.email,
          password: hashPassword,
          admin: req.body.admin
        }, function() {
          res.json({
            success: true,
            message: 'User updated sucessfully.'
          })
        });
      })

    } catch (err) {
      res.status(422).send(err);
    }
  });

  // delete a User
  app.delete('/api/users/:id', function (req, res) {
    try {
      User.findById({ '_id': req.params.id }, function (err, User) {
        if (err)
          res.status(422).send(err);

      }).remove().exec();
      res.json({
        success: true,
        message: 'User deleted sucessfully.'
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Book ===
  // get all Books
  app.get('/api/books', function (req, res) {
    Book.find(function (err, Books) {
      if (err)
        res.status(400).send(err);

      res.json(Books);
    })
  });

  // get Book by id
  app.get('/api/books/:id', function (req, res) {
    try {
      Book.findOne({ '_id': req.params.id }, function (err, Book) {
        if (err)
          res.status(422).send(err);

        res.json(Book);
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // add new Book
  app.post('/api/books', function (req, res) {
    try {
      new Book({
        title: req.body.title,
        stock: req.body.stock,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre
      }).save();

      res.json({
        success: true,
        message: 'New Book added sucessfully.'
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update a Book
  app.put('/api/books/:id', function (req, res) {
    try {
      Book.findById({ '_id': req.params.id }, function(err, Book){
        if (err)
          res.status(422).send(err);

        Book.update({
          title: req.body.title,
          stock: req.body.stock,
          author: req.body.author,
          year: req.body.year,
          genre: req.body.genre
        }, function() {
          res.json({
            success: true,
            message: 'Book updated sucessfully.'
          })
        });
      })

    } catch (err) {
      res.status(422).send(err);
    }
  });

  // delete a Book
  app.delete('/api/books/:id', function (req, res) {
    try {
      Book.findById({ '_id': req.params.id }, function (err, Book) {
        if (err)
          res.status(422).send(err);

      }).remove().exec();
      res.json({
        success: true,
        message: 'Book deleted sucessfully.'
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Rent ===
  // get all Rents
  app.get('/api/rents', function (req, res) {
    Rent.find(function (err, Rents) {
      if (err)
        res.status(400).send(err);

        if (Rents.length > 0) {

          var response = Rents,
              send = false;

          response.forEach((item, index, array) => {

            User.findOne({ '_id': item.user }, function (err, User) {
              response[index].user = User;
            });
            
            item.books.forEach((book, bookIndex, bookArray) => {
              Book.findOne({ '_id': book }, function (err, Book) {
                response[index].books[bookIndex] = Book;

                if ( (bookIndex + 1) === bookArray.length && (index + 1) === array.length)
                  send = true;
              });
            });

          });

          // ugly hack, but ATM only solution
          // check if response modification is done
          var interval = setInterval(function(){
            if (send) {
                res.json(response);
                clearInterval(interval);
            }
          }, 100)

        } else {
          res.json(Rents);
        }
    })
  });

  // get Rent by id
  app.get('/api/rents/:id', function (req, res) {
    try {
      Rent.findOne({ '_id': req.params.id }, function (err, Rent) {
        if (err)
          res.status(422).send(err);

        res.json(Rent);
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // get Rent by user
  app.get('/api/users/:id/rents', function (req, res) {
    try {
      Rent.find({ 'user': req.params.id }, function (err, Rents) {
        if (err)
          res.status(422).send(err);

        if (Rents.length > 0) {

          var response = Rents,
              send = false;

          response.forEach((item, index, array) => {

            User.findOne({ '_id': item.user }, function (err, User) {
              response[index].user = User;
            });
            
            item.books.forEach((book, bookIndex, bookArray) => {
              Book.findOne({ '_id': book }, function (err, Book) {
                response[index].books[bookIndex] = Book;

                if ( (bookIndex + 1) === bookArray.length && (index + 1) === array.length)
                  send = true;
              });
            });

          });

          // ugly hack, but ATM only solution
          // check if response modification is done
          var interval = setInterval(function(){
            if (send) {
                res.json(response);
                clearInterval(interval);
            }
          }, 200)

        } else {
          res.json(Rents);
        }
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // add new Rent
  app.post('/api/rents', function (req, res) {
    try {
      new Rent({
        user: req.body.user,
        books: req.body.books,
        lastName: req.body.lastName,
        dateRented: req.body.dateRented || Date.now(),
        notes: req.body.notes,
        returned: req.body.returned || false
      }).save();

      req.body.books.forEach((item, index, array) => {
        
        Book.findOne({ '_id': item }, function (err, Book) {

          var stock = Book.stock;
          stock--;

          Book.update({
            stock: stock
          }, function() {
            // console.log(Book)
          });

        });

      });

      res.json({
        success: true,
        message: 'New Rent added sucessfully.'
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update a Rent
  app.put('/api/rents/:id', function (req, res) {
    try {
      Rent.findById({ '_id': req.params.id }, function(err, Rent){
        if (err)
          res.status(422).send(err);

        Rent.update({
          user: req.body.user,
          books: req.body.books,
          lastName: req.body.lastName,
          dateRented: req.body.dateRented,
          notes: req.body.notes,
          returned: req.body.returned
        }, function() {
          res.json({
            success: true,
            message: 'Rent updated sucessfully.'
          })
        });
      })

    } catch (err) {
      res.status(422).send(err);
    }
  });

  // delete a Rent
  app.delete('/api/rents/:id', function (req, res) {
    try {
      Rent.findById({ '_id': req.params.id }, function (err, Rent) {
        if (err)
          res.status(422).send(err);

          Rent.books.forEach((item, index, array) => {
            
            Book.findOne({ '_id': item }, function (err, Book) {

              var stock = Book.stock;
              stock++;

              Book.update({
                stock: stock
              }, function() {
                // console.log(Book)
              });

            });

          });

      }).remove().exec();
      res.json({
        success: true,
        message: 'Rent deleted sucessfully.'
      })
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // General ===
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  });

}
