export const basepath = process.env.NODE_ENV == 'production' ? '/api' : '/';
export const corsOptions = {
    origin: "*", //change this while changing in the production
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};
//# sourceMappingURL=global.config.js.map