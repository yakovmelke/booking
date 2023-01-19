const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser")


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

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api/hotels",hotelsRouter)
app.use("/api/rooms",roomsRouter)
app.use("/api/users",usersRouter)

app.use((err,req,res,next)=>{
    const errorStatus = err.status||500;
    const errorMessage = err.message||"Something went wrong";
    res.status(errorStatus).json({
        seccess: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8000, () => {
  console.log("http://localhost:8000");
  connect();
});
