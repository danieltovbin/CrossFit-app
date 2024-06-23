import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import connectDB from './config/dbConn.js';
import {seedDB} from './API/Products/seeder.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();
seedDB();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

import productsRouter from './API/Products/productsRouter.js';
app.use("/API/Products", productsRouter);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
