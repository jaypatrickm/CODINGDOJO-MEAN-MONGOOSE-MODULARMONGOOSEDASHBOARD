//=======================================================
// routes setup file
//=======================================================
// require controller file - users.js
//=======================================================
var user = require('../controllers/users.js');
module.exports = function(app) 
{
	console.log('HELLO!');
	app.get('/', function(req, res) 
	{
		console.log('A');
		user.show(req, res);
	})

	app.get('/mongooses/id/:id', function(req, res) {
		console.log('B');
		user.findbyid(req, res);
	})

	app.get('/mongooses/:id/edit', function(req, res) {
		console.log('C');
		console.log(res);
		user.edit(req, res);
	})

	app.post('/mongooses/:id', function(req, res) {
		console.log('D');
		console.log("POST DATA", req.body);
		user.updatemongoose(req, res);
	})

	app.get('/mongooses/new', function(req, res) {
		console.log('E');
		console.log(1);
		user.addnew(req,res);
	})	

	app.post('/mongoooses', function(req, res) {
		console.log('F');
		console.log("POST DATA", req.body);
		user.addmongoose(req,res);
	})

	app.post('/mongooses/:id/destroy', function(req, res) {
		console.log("POST DATA", req.body);
		// create a new User with the name and age corresponding to those from req.body
		// var mongoose = new User({name: req.body.name, age: req.body.age, favorite_color: req.body.color});
		// try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
		user.destroy(req, res);
	})
}