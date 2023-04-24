import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_url = 'mongodb+srv://batros:Maestro123321@batros.zyubeio.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_url,{useNewUrlParser : true , useUnifiedTopology : true})
.then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
.catch((error)=>{console.log(error.message)});


