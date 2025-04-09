import dotenv from "dotenv";
import express from "express";
import connectDB from "./database/db.js";
import cors from 'cors';
import bodyParser from 'body-parser'; 

import userRoutes from "./routes/user.routes.js";

const app = express();



dotenv.config({ path: './.env' });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 8000;
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/Feedbacks')
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection error: ", err);
});