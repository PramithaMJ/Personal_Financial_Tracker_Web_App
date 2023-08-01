import mongoose from "mongoose";
import config from "../configs/index.js";
import logger from "../utils/logger.js";

let database;

const connect = async () => {
  const MONGOBD_URL = config.DB_CONNECTION_STRING;

  if (database) return;

  mongoose
    .connect(MONGOBD_URL)
    .then((connection) => {
      database = connection;
      logger.info("Database Synced");
    })
    .catch((err) => {
      logger.error(` ${err.message}`);
    });
};

export { connect };
