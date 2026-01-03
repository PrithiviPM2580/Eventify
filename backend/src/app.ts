import express, { type Express } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
const app: Express = express();

app.all("/api/v1/auth/{*any}", toNodeHandler(auth));

export default app;
