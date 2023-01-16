import { Router } from "express";
import { getSchedules } from "../controllers/controllers.js";

const app = Router();

app.get('/booking', (req, res)=> getSchedules(req, res));

export default app;