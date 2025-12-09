import pino from "pino";
import path from "path";
import fs from "fs";
const isProduction = process.env.NODE_ENV === "production";
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
// Different config for prod vs dev
const pinoConfig = isProduction
    ? {
        level: "info",
        timestamp: pino.stdTimeFunctions.isoTime,
        formatters: {
            level: (label) => ({ level: label }),
        },
    }
    : {
        level: "debug",
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                ignore: "pid,hostname",
                translateTime: "HH:MM:ss",
            },
        },
    };
export const logger = isProduction
    ? pino(pinoConfig, pino.destination(path.join(logDir, "server.log")))
    : pino(pinoConfig);
// Helper functions for structured logging
export const log = {
    info: (message, data) => logger.info(data || {}, message),
    error: (message, error, data) => logger.error({
        ...data,
        error: error?.message,
        stack: error?.stack,
    }, message),
    warn: (message, data) => logger.warn(data || {}, message),
    debug: (message, data) => logger.debug(data || {}, message),
    // For HTTP requests
    http: (req, res, responseTime) => {
        logger.info({
            method: req.method,
            url: req.url,
            status: res.statusCode,
            responseTime: `${responseTime}ms`,
            userAgent: req.headers["user-agent"],
        }, "HTTP Request");
    },
};
//# sourceMappingURL=Logger.js.map