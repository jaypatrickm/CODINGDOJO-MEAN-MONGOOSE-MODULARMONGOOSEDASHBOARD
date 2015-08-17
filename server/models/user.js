var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema( {
	name: String, 
	age: Number,
	favorite_color: String,
	date: { type: Date, default: Date.now }
})

//add validations using path
UserSchema.path('name').required(true, 'Name cannot be blank');
UserSchema.path('age').required(true, 'Age cannot be blank');
UserSchema.path('favorite_color').required(true, 'Favorite Color cannot be blank');
mongoose.model('User', UserSchema);