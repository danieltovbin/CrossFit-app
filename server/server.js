import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import connectDB from './config/dbConn.js';
import {seedDB} from './API/Products/seeder.js'
import verifyJWT from "./middleware/verifyJWT.js";
import errorHandler from "./middleware/errorHandler.js";
import credentials from "./middleware/credentials.js";
import pageNotFound from "./middleware/pageNotFound.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();
// seedDB();

app.use(credentials)

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import authRouter from './API/Auth/authRouter.js';
app.use("/API/auth", authRouter);

// app.use(verifyJWT);

import productsRouter from './API/Products/productsRouter.js';
app.use("/API/products", productsRouter);

app.use(pageNotFound);

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
