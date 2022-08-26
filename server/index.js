const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;
const router = require("./routes/index");

const app = express();

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
}

start();

app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use("/api", router);

// app.use(passport.initialize());
// app.use(passport.session());


