import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import { log } from "./logger/Logger.js";
import { mainRouter } from "./routers/main.router.js";
import http from "http";
import { corsOptions } from "./lib/global.config.js";
dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
async function startServer() {
    try {
        await connectDB();
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
    }
    catch (error) {
        console.log("Server is Unable to start", error);
        log.error("server is Unable to start", error);
    }
}
startServer();
//# sourceMappingURL=index.js.map