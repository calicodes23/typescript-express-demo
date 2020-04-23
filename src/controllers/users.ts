import { Request, Response, NextFunction } from "express";
import models from "../config/connection";
import { Document } from "mongoose";

class UserController {
  public async getUsersList(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await models.User.find();
      res.send({
        message: "these are the users",
        users,
      });
    } catch (error) {
      console.log("LOG: Users -> runFunctions -> error", error);
      next(error);
    }
  }

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(`req.body`, req.body);
      const { username } = req.body;
      console.log("LOG: UserController -> createUser -> username", username);

      const user = new models.User({
        username,
      });

      const newUser = await user.save();

      const users: Document[] = await models.User.find();
      const result = {
        newUser,
        users,
      };
      res.send(result);
    } catch (e) {
      console.log("LOG: UserController -> createUser -> e", e);
      next(e);
    }
  }
}

export default new UserController();
