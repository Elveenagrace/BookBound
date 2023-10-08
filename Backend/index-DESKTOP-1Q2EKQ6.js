import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookmodel.js";
import booksRoute from './routes/booksRoute.js';
//import cors from 'cors';
 

   
//app.use(cors()); 

const app=express();
//const cors = require('cors');
//middleware for parsing request body
app.use(express.json());
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your React app's domain
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
     next();
   });

// app.use(
//      cors({
          
//           origin: 'http://localhost:3000',
//           methods: ['GET', 'POST', 'PUT', 'DELETE'],
//           allowedHeaders: ['Content-Type'],

//      })
//      );

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
