const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();
const userRouter = require("./User/UserRoutes");


const port = 8000;
app.use(express.json());
app.use(cors())

app.use("/api", userRouter);


mongoose.connect("mongodb://localhost:27017/reg", (err) => {
    if (err) process.exit(1);
    console.log("connected to database successfully");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use((err, req, res, next) => {
    res.send({
        status: err.statusCode,
        message: err.message,
        errors: err.errors || [],
    });
});