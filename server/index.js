const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
require('dotenv').config()


const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`);
        });
    }
    catch (e) {
        console.log(e)
    }
}

start();

app.use(
  cookieSession({ name: "session", keys: ["privateKey"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
