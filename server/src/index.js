import express from "express";
import router from "./routers/index.js";
import userRouter from "./routers/users.js"

const app = express();

app.use('/api', router);
app.use('/api/users', userRouter);

app.listen(3001, () => console.log('server started'));