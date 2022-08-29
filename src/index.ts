import express, {} from "express";
import dotenv from "dotenv";

const app = express();
const PORT: number = Number.parseInt(process.env.PORT || "5000");
const HOST = process.env.HOST || "localhost";
dotenv.config();

app.listen(PORT, HOST, () => {
  console.log(`Server on running on http://${HOST}:${PORT}`);
});

