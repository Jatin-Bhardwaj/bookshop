const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: [true, 'Please add a name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name cannot be more than 50 characters']
	},
	photo: {
		type: String,
		default: 'np-photo.jpg'
	},
	Country: {
		type: String,
		required: true,
		unique: false
	}
});

module.exports = mongoose.model('Authors', authorSchema);
