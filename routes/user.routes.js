import express from "express";
import { GetFeedbacks, SubmitPost } from "../controllers/userController.js";

const app = express.Router();

app.post('/submit-feedback', SubmitPost);

app.get('/feedbacks', GetFeedbacks);


export default app;