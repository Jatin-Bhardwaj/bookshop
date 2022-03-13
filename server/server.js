//import express
const express = require('express');
const app = express();

const colors = require('colors');

//logging request using morgan
const morgan = require('morgan');

//importing environment
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({path: './config/.env'});

//import PORT
const PORT = process.env.PORT || 5000;

//connect to database
connectDB();

//importing api
const api = process.env.API_URL;

//express middleware
app.use(express.json());
app.use(morgan('tiny'));

//http://localhost:5000/api/v1/books

app.get(`${api}/books`, (req, res) => {
	const book = {
		name: 'Ants among Elephants',
		author: 'Sujatha Gidla',
		page: '300'
	};
	res.send(book);
});

app.post(`${api}/books`, (req, res) => {
	const newBook = req.body;
	res.send(newBook);
});

app.listen(PORT, () => {
	console.log(api);
	console.log(`server is running on ${PORT}`.yellow.bold);
});
