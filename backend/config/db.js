import dotenv from 'dotenv';
dotenv.config()
import mongoose from "mongoose";

const db_link = process.env.MONGO_URI

function connectDB () {

  mongoose
  .connect(db_link, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
}

export default connectDB;