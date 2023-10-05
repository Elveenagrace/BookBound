import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookmodel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app=express();
//const cors = require('cors');
//middleware for parsing request body
app.use(express.json());

app.use(
     cors({
          origin: 'http://localhost:3000',
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          allowedHeaders: ['Content-Type'],

     })
     );

app.get('/', (request,response) => {
     console.log(request)
     return response.status(234).send('Welcome to my mern project')
});

app.use('/books', booksRoute);

mongoose
 .connect(mongoDBURL)
 .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
     console.log(`App is listening to port: ${PORT}`);
});
 })
 .catch(() => {
    console.log(error);
 });
