//=======================================================
// setup mongoose db connection file
//=======================================================
var mongoose = require('mongoose');
var fs = require('fs');
//=======================================================
// This is how we connect to the mongodb using mongoos --
// "mongeese" is the name of our db in mongodb -- 
// this should match the name of the db you are to use for your project
//=======================================================
mongoose.connect('mongodb://localhost/mongeese');
//=======================================================
// Below is a function to require all models we build inside
// our 'models' folder
//=======================================================
var models_path = __dirname + '/../models';
fs.readdirSync(models_path).forEach(function(file) 
{
	if(file.indexOf('.js') > 0)
	{
		require(models_path + '/' + file);
	}
})
//=======================================================