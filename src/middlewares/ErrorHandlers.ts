import { Request, Response, NextFunction } from "express";
import AlreadyExistsError from "../Errors/AlreadyExistsError";

export default function (
  err: AlreadyExistsError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.code).send(err.message);
  console.log(
    `Path: ${req.path} | Mathod: ${req.method} | Error: ${err.name} | ErrorMessage: ${err.message} | Status Code: ${res.statusCode} | Status Message: ${res.statusMessage}`
  );
}
