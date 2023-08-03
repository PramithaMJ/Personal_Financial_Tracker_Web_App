import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";

import "dotenv/config";
import { connect } from "./utils/database.connection.js";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2>💲🤑Personal Finance Tracker System API </h2");
  next();
});

app.listen(PORT, async () => {
  logger.info("This is testing");
  // logger.info("This is testing");
  // logger.warn("This is warning");

  connect();
  console.log(`🚀🎯Server is up and running on PORT ${PORT}`);
});
