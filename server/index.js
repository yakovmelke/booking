const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const connect = () => {
  try {
    mongoose.set({ strictQuery: true });
    mongoose.connect(process.env.MONGO);
    console.log("conected to mongodb");
  } catch (error) {
    trhow(error);
  }
};

const authRouter =require("./routes/auth")
const hotelsRouter =require("./routes/hotels")
const usersRouter =require("./routes/users")
const roomsRouter =require("./routes/rooms")

app.use(express.json())

app.use("/api/aute",authRouter)
app.use("/api/hotels",hotelsRouter)
app.use("/api/rooms",roomsRouter)
app.use("/api/users",usersRouter)


app.listen(8000, () => {
  console.log("http://localhost:8000");
  connect();
});