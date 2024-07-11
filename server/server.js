import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import connectDB from './config/dbConn.js';
import errorHandler from "./middleware/errorHandler.js";
import credentials from "./middleware/credentials.js";
import pageNotFound from "./middleware/pageNotFound.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))  

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();

app.use(credentials)

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import authRouter from './API/Auth/authRouter.js';
app.use("/API/auth", authRouter);

import productsRouter from './API/Products/productsRouter.js';
app.use("/API/products", productsRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(pageNotFound);

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
