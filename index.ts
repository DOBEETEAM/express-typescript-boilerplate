import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import corsOptions from "~/configs/cors.config";
import { APP_HOSTNAME, APP_PORT } from "~/constants/app.constant";
import Router from "~/routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Using helmet to security for app
app.use(helmet());
// Using Cors to allow some specific origins (other domains) request to server.
app.use(cors(corsOptions));
// Using Morgan to log all requests
app.use(morgan("dev"));

Router(app);

app.listen(APP_PORT, APP_HOSTNAME, () => {
  console.log(`Server is running on port ${APP_PORT} and address http://${APP_HOSTNAME}:${APP_PORT}`);
});
