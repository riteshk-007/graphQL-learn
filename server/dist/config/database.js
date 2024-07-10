import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
    errorFormat: "pretty",
    // log: ["query", "info", "warn"],
    // errorFormat: "colorless",
    // errorFormat: "pretty",
    // errorFormat: "minimal
});
export default prisma;
