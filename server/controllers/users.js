var mongoose = require('mongoose');
// This is how we connect to the mongodb using mongoos -- "basic_mongoose" is the name of our db in mongodb -- this should match the name of the db you are to use for your project
// mongoose.connect('mongodb://localhost/mongeese');
var User = mongoose.model('User');
var userController = {};
module.exports = (function() 
{
	return {
		//show: function
		show: function(req,res)
		{
			User.find({}, function(err, results)
			{
				if(err)
				{
					console.log(err);
					res.render('index');
				}
				else
				{
					res.render('index', {users: results});
				}
			})
		},
		findbyid: function(req, res)
		{
			User.find({_id: req.params.id},  function(err, data)
			{
				console.log(data);
				//console.log(mongoose_data);
				if (err)
				{
					console.log(err);
					res.render('show');
				}
				else {
					res.render('show', {mongoose: data});
				}
			})
		},
		edit: function(req, res)
		{
			User.find({_id: req.params.id},  function(err, data){
				if (err)
				{
					console.log(err)
					res.render('edit');
				}
				else {
					res.render('edit', {mongoose: data});
				}
			})
		},
		updatemongoose: function(req, res)
		{
			 // console.log("POST DATA", req.body);
			// create a new User with the name and age corresponding to those from req.body
			// var mongoose = new User({name: req.body.name, age: req.body.age, favorite_color: req.body.color});
			// try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
			User.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, favorite_color: req.body.color}, function(err, user) {
				if (err)
				{
					// console.log(err);
					res.render('edit');
				}
				else
				{
					res.redirect('/');
				}
			})
		},
		addnew: function(req, res)
		{
			console.log('2');
			res.render('add');
		},
		addmongoose: function(req, res)
		{
			// create a new User with the name and age corresponding to those from req.body
			var mongoose = new User({name: req.body.name, age: req.body.age, favorite_color: req.body.color});
			// try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
			mongoose.save(function(err) {
				//if there is an error console.log that something went wrong!
				if(err)
				{
					res.render('add', {title: 'you have errors!', errors: mongoose.errors})
				}
				else
				{
					console.log('successfully added a user!');
					res.redirect('/');
				}
			})
		},
		destroy: function(req, res)
		{
			User.remove({_id: req.params.id}, function(err, user) {
				res.redirect('/');
			})
		}	
	}
})();