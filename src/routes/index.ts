import express from "express";
import rooms from "./rooms";

const routes = express.Router();

// base
routes.get("/", (req, res) => res.send("API v0.0.1"));
// rooms
routes.use("/rooms", rooms);

export default routes;
