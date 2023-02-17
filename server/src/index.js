import express from "express";
import mongoose from "mongoose";
import router from "./routers/index.router.js";
import userRouter from "./routers/user.router.js"
import authRouter from "./routers/auth.router.js";
import postRouter from "./routers/post.router.js";

const app = express();

app.use('/', router);
app.use('/api', userRouter);
app.use('/auth', authRouter);
app.use('/api', postRouter);
async function db() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://0.0.0.0:27017/test');
}

db();

app.listen(3001, () => console.log('server started'));