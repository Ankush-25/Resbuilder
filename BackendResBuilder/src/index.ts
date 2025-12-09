import "dotenv/config";
import express from "express";
import cors from "cors";
// import { connectDB } from "./lib/db.ts";
import { log } from "./logger/Logger.ts";
import { mainRouter } from "./routers/main.router.ts";
import http from "http";
import { corsOptions } from "./configs/global.config.js";
import prisma from "./lib/prisma.ts";

const PORT = Number(process.env.PORT) || 3000;
async function startServer() {
  try {
    //for more constomization
    // use this when to remove the prisma
    //  await connectDB();
    await prisma.$connect();
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const httpServer = http.createServer(app);
    app.use(cors(corsOptions));
    app.use(mainRouter);
    httpServer.listen(PORT, "0.0.0.0", () => {
      log.info(`Server is running on port ${PORT}`);
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server is Unable to start", error);
    log.error("server is Unable to start", error as Error);
  }
}
startServer();
