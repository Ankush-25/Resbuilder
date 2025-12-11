import "dotenv/config";
import express from "express";
import cors from "cors";
// import { connectDB } from "./lib/db.ts";
import { log } from "./logger/Logger.ts";
import { mainRouter } from "./routers/main.router.ts";
import http from "http";
import { corsOptions } from "./configs/global.config.js";
import { prisma } from "./lib/prisma.ts";
import { getError } from "./utils/errorHandler.js";

const PORT = Number(process.env.PORT);
async function startServer() {
  try {
    //for more constomization
    // use this when to remove the prisma
    //  await connectDB();
    try {
      await prisma.$connect();
      log.info("Postgres Database successfully connected");
    } catch (error) {
      const message = getError(error);
      log.error(`CRITICAL: Database connection failed - ${message}`);
      process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const httpServer = http.createServer(app);
    app.use(cors(corsOptions));
    app.use(mainRouter);
    httpServer.listen(PORT, "0.0.0.0", () => {
      log.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    log.error("server is Unable to start", error as Error);
  }
}
startServer();
