import { Request, Response, NextFunction } from "express";
import _ from "lodash";
// import DotObjectParser from "object-dot-parser";
import dotObject from "dot-object";
export default function dotParser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    dotObject.object(req.body);
    let fileData: any = new Object(req.files);
    fileData.forEach((x: any) => {
      _.merge(
        req.body,
        dotObject.object({
          [x.fieldname]: x.id.toString(),
        })
      );
    });
    next();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
