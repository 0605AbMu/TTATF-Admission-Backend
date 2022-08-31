// Modullarni import qilish
import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
// Routerlarni import qilish
import Admission from "./router/Client/Admission";
import errorHandler from "./middlewares/ErrorHandlers";
// constanlar
const app = express();
const PORT: number = Number.parseInt(process.env.PORT || "5000");
const HOST = process.env.HOST || "localhost";

// .env config ni import qilish
dotenv.config();

// Application using
app.use("/admission", Admission);
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("This server");
});

// Errors handler
app.use(errorHandler);

app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Not Found.");
});
// application ni ishga tushurish
app.listen(PORT, HOST, () => {
  console.log(`Server on running on http://${HOST}:${PORT}`);
});
