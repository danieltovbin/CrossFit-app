import dotenv from "dotenv";
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import connectDB from './config/dbConn.js';
const PORT = process.env.PORT || 3500;

connectDB();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})