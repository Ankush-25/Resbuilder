import "dotenv/config";
import { PrismaClient } from "@prisma/client";

async function main() {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);

    console.log("Attempt 1: datasources key");
    try {
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL,
                },
            },
        } as any);
        await prisma.$connect();
        console.log("Success with datasources!");
        await prisma.$disconnect();
    } catch (e: any) {
        console.error("Failed with datasources:", e.message);
    }

    console.log("Attempt 2: datasourceUrl key");
    try {
        const prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        } as any);
        await prisma.$connect();
        console.log("Success with datasourceUrl!");
        await prisma.$disconnect();
    } catch (e: any) {
        console.error("Failed with datasourceUrl:", e.message);
    }
}

main();
