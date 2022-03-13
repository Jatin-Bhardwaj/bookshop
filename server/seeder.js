const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load models
const Books = require('./models/Books');
const Authors = require('./models/Authors');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path: './config/.env'});

//connect to DB
mongoose.connect(process.env.MONGO_URI, {});

//Read JSON files
const books = JSON.parse(fs.readFileSync(`${__dirname}/_data/books.json`, 'utf-8'));
const authors = JSON.parse(fs.readFileSync(`${__dirname}/_data/authors.json`, 'utf-8'));

//Import into DB
const importData = async () => {
	try {
		await Authors.create(authors);
		await Books.create(books);
		console.log(`Data Imported ...`.green.inverse);
		process.exit();
	} catch (error) {
		console.log(error);
	}
};
//Delete data
const deleteData = async () => {
	try {
		await Authors.deleteMany(authors);
		await Books.deleteMany(books);
		console.log(`Data Destroyed ...`.red.inverse);
		process.exit();
	} catch (error) {
		console.log(error);
	}
};

if (process.argv[2] === '-i') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
}
