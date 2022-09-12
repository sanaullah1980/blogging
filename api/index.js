const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

const app = express();
app.use(express.json(), express.urlencoded({extended: true}));

dotenv.config({path: './config/config.env'});
connectDB();

const storage = multer.diskStorage(
    {
        destination: (req,file,cb) => {
            cb(null,"images")
        }, 
        filename: (req, file, cb) => {
            cb(null, "test.jpeg")
        }
    }
);

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded");
});

// app.use(cors);


app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);



app.listen(5000, ()=>{
    console.log("Backend is running");
})