var seeder = require('mongoose-seed');
var db = require('./config/db');
var bcrypt = require('bcrypt');

// Connect to MongoDB via Mongoose 
seeder.connect(db.url, function() {
 
    // Load Mongoose models 
    seeder.loadModels([
        'model/book.js',
        'model/user.js',
				'model/rent.js'
    ]);
 
    // Clear specified collections 
    seeder.clearModels(['Book', 'User', 'Rent'], function() {
 
        // Callback to populate DB once collections have been cleared 
        seeder.populateModels(data, function() {
            //seeder.disconnect(); 
        });
 
    });
});

var hashPass = function (pass) {
	var saltRounds = 5;
	var salt = bcrypt.genSaltSync(saltRounds);
	var hashPassword = bcrypt.hashSync(pass, salt);

	return hashPassword;
};

var data = [
{
	model: 'Book',
	documents: [
			{
				title: 'The Grapes of Wrath',
				stock: 10,
				author: 'John Steinbeck',
				year: 1939,
				genre: 'Science fiction'
			},
			{
				title: 'The Great Gatsby',
				stock: 20,
				author: 'F. Scott Fitzgerald',
				year: 2010,
				genre: 'Drama'
			},
			{
				title: 'Nineteen Eighty-Four',
				stock: 15,
				author: 'George Orwell',
				year: 1949,
				genre: 'Science fiction'
			},
			{
				title: 'Ulysses',
				stock: 15,
				author: 'James Joyce',
				year: 1918,
				genre: 'Drama'
			},
			{
				title: 'Lolita',
				stock: 15,
				author: 'Vladimir Nabokov',
				year: 1955,
				genre: 'Romance'
			},
			{
				title: 'Catch-22',
				stock: 15,
				author: 'Joseph Heller',
				year: 1961,
				genre: 'History'
			},
			{
				title: 'The Catcher in the Rye',
				stock: 15,
				author: 'J. D. Salinger',
				year: 1951,
				genre: 'Fantasy'
			},
			{
				title: 'Beloved',
				stock: 15,
				author: 'Toni Morrison',
				year: 1987,
				genre: 'Religion'
			},
			{
				title: 'The Sound and the Fury',
				stock: 15,
				author: 'William Faulkner',
				year: 1929,
				genre: 'Anthology'
			},
			{
				title: 'To Kill a Mockingbird',
				stock: 15,
				author: 'Harper Lee',
				year: 1960,
				genre: 'Series'
			},
		]
	},
	{
		model: 'User',
		documents: [
			{
				firstName: 'Admin',
				lastName: 'Admin',
				phone: '+00000000000',
				email: 'admin@test.com',
				password: hashPass('admin'),
				admin: true
			},
			{
				firstName: 'John',
				lastName: 'Doe',
				phone: '+123333221345',
				email: 'info@test.com',
				password: hashPass('test'),
				admin: false
			},
			{
				firstName: 'Jane',
				lastName: 'Doe',
				phone: '+433332312312',
				email: 'jane@test.com',
				password: hashPass('test'),
				admin: false
			}
		]
	}
];