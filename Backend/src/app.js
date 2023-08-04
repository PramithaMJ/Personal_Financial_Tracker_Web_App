import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import logger from "./utils/logger.js";
import config from "./configs/index.js";
import { connect } from "./utils/database.connection.js";
import { googleAuth } from "./configs/google_auth.js";
import { routesInit } from "./api/routes/index.js";


const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(
  session({
    secrete: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      expires: new Date(Date.now() + 10000),
      maxAge: 10000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
  res.send("<h2>💲🤑Personal Finance Tracker System API </h2");
  res.send("<a href='http://localhost:8090/auth/google'>Login with Google</a>");
  next();
});

app.listen(PORT, async () => {
  logger.info("This is testing");
  // logger.info("This is testing");
  // logger.warn("This is warning");
  console.log(`🚀🎯Server is up and running on PORT ${PORT}`);
  connect();
  routesInit(app, passport);
  googleAuth(passport);
});



//1:59:53