import express from "express";
import { index } from "../controllers/Rooms";

const routes = express.Router();

// get room
routes.get("/:id", index);

export default routes;
