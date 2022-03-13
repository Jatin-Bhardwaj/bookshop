const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
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
	year_written: {
		type: String,
		unique: false
	},
	edition: {
		type: String,
		unique: 'false',
		default: 'independent'
	},
	price: String,
	author: {
		type: mongoose.Schema.ObjectId,
		ref: 'Authors',
		required: true
	}
});

module.exports = mongoose.model('Books', bookSchema);
