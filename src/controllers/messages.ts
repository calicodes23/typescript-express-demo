import { Request, Response, NextFunction } from "express";
import models from "../config/connection";
import { Document } from "mongoose";

class MessagesController {
  public async getAllMessages(req: Request, res: Response, next: NextFunction) {
    try {
      const messages = await models.Message.find();
      console.log(
        "LOG: MessageController -> getAllMessages -> messages",
        messages
      );
      res.send({ success: "Messages list below", messages });
    } catch (error) {
      next(error);
    }
  }
}

export default new MessagesController();
