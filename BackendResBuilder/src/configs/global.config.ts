import type { CorsOptions } from "cors";
export const basepath : string = process.env.NODE_ENV == 'production'? '/api': '/';

export const corsOptions: CorsOptions = {
      origin: "*",//change this while changing in the production
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    };