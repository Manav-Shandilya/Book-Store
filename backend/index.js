import express, { response } from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());


app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('welcome to tutorial');
});

app.use('/books', booksRoute);
 
mongoose
.connect(mongoDBURL)
.then(() =>{
  console.log('app connected');
  app.listen(PORT, () =>{
    console.log(`its working: ${PORT}`);
  });
  
})
.catch((error) => {
  console.log(error);
})