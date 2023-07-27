const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const server = () => {
  console.log("You are listening to port: ", PORT);
};

server();
