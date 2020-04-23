import { Router } from "express";
import Example from "../example";
import UsersController from "../controllers/users";

const routes = Router();

routes.get("/example", Example.runFunctions);
routes.get("/users", UsersController.getUsersList);
routes.post("/createUser", UsersController.createUser);

export default routes;
