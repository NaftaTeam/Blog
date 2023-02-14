import express from "express";
import router from "./routers/index.router.js";
import userRouter from "./routers/users.router.js"
import mongoose from "mongoose";

import User from "./models/user.model.js"

const app = express();

app.use('/api', router);
app.use('/api/users', userRouter);

async function db() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://0.0.0.0:27017/test');
}

db();

app.listen(3001, () => console.log('server started'));