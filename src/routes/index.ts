import { Express } from "express";
import AuthRouter from "./api/auth.route";

function Router(app: Express) {
  app.use("/api", AuthRouter);

  app.get("/hello-world", (req, res) => {
    res.send("<h1>Hello World!</h1>");
  });
}

export default Router;
