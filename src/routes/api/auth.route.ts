import express from "express";
import { authController } from "~/controllers/auth.controller";

const AuthRoute = express.Router();

AuthRoute.get("/auth/login", authController.login);

export default AuthRoute;
