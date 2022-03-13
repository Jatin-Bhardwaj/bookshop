const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb://localhost:27017/bookstore');
		console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline.bold);
	} catch (error) {
		console.log(error);
	}
};
module.exports = connectDB;
