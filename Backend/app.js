import express from "express";
import cors from "cors";
import connectDB from "./database/database.js";

import router from "./routes/transactions.js";

import { promises as fsPromises } from "fs";
import os from "os";
import { fileURLToPath } from "url";
import path from "path";
import "dotenv/config";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());
//routes
//readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

(async () => {
  const routeFiles = await fsPromises.readdir(path.join("routes"));
  routeFiles.map(async (route) => {
    const routePath = path.join("routes", route);
    const { default: routeModule } = await import(`./${routePath}`);
    app.use("/api/v1", routeModule);
  });
})();

//use router fromtrans
// app.use("/api/v1", router);

// Database connection function
const server = () => {
  connectDB();
  app.listen(PORT, () => {
    console.log("You are Listening to port:", PORT);
  });
};

server();

//50
