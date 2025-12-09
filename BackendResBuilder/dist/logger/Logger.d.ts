import pino from "pino";
export declare const logger: pino.Logger<never, boolean>;
export declare const log: {
    info: (message: string, data?: any) => void;
    error: (message: string, error?: Error, data?: any) => void;
    warn: (message: string, data?: any) => void;
    debug: (message: string, data?: any) => void;
    http: (req: any, res: any, responseTime: number) => void;
};
//# sourceMappingURL=Logger.d.ts.map