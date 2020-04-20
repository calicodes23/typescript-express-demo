import { Router } from "express";
import Example from "../example";
import Items from "../controllers/";

const routes = Router();

routes.get("/example", Example.runFunctions);
routes.get("/items", Items.getItemsList);

export default routes;
