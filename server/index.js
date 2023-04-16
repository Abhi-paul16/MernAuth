import bodyParser from "body-parser";
import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'

import postRoutes from "./routes/posts.js"
 
const app = express();

app.use('/posts' , postRoutes)

app.use(bodyParser.json({limit:"30mb" , extented:true}));
app.use(bodyParser.urlencoded({limit:"30mb" , extented:true}));
app.use(cors());

// connect app to server

const CONNECTION_URL = "mongodb+srv://abhishekpal:abhishek16$@memoriesapp.vqmjrah.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL )
.then(()=> app.listen(PORT , ()=> console.log('server running on port')))
.catch((error)=>console.log(error.message))

// mongoose.set('useFindAndModify' , false);