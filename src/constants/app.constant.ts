import dotenv from "dotenv";

dotenv.config();

export const APP_PORT: number = Number(process.env.APP_PORT);
export const APP_HOSTNAME: string = String(process.env.APP_HOSTNAME);
