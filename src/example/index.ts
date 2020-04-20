import { Request, Response, NextFunction } from "express";

class Example {
  public async runFunctions(req: Request, res: Response, next: NextFunction) {
    try {
      const exampleArr = [1, 2, 3, 4, 5];

      // res.send({
      //   message: "exampleArr",
      //   exampleArr,
      // });

      const addFive = (input: number[]): number[] => {
        return input.map((number: number) => number + 5);
      };

      const addFiveResult = addFive(exampleArr);

      // res.send({
      //   message: "addFiveResult",
      //   input: exampleArr,
      //   addFiveResult,
      // });

      type TwoFour = 2 | 4;

      const multiplyByTwoOrFour = (input: number[], twoOrFour: TwoFour) => {
        return input.map((number) => number * twoOrFour);
      };

      const result = multiplyByTwoOrFour(exampleArr, 2);

      // res.send({ message: "two or four result", exampleArr, result });

      // ToDo:
      type ExampleObj = {
        hello?: string;
        world?: boolean;
        adios?: TwoFour[];
        luna?: any;
      };

      const sampleObj: ExampleObj = {};
      // sampleObj.hello = "hi"; // NOTES: do this in live demo - why you can add .hello and not .bye and

      // res.send({
      //   message: "sample obj example",
      //   ...sampleObj,
      // });
    } catch (error) {
      console.log("LOG: Example -> runFunctions -> error", error);
      next(error);
    }
  }
}

export default new Example();
