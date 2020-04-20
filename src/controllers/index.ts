import { Request, Response, NextFunction } from "express";

class Items {
  public async getItemsList(req: Request, res: Response, next: NextFunction) {
    try {
      res.send(`testing items route`);
    } catch (error) {
      console.log("LOG: Items -> runFunctions -> error", error);
      next(error);
    }
  }
}

export default new Items();
