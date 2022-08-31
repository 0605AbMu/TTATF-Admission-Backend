import client from "./DBClient";
import defaultConfig from "../../config/default.json";
import joi from "joi";

export const studentValidator = joi.object({
    
});

export const StudentsDB = client
  .db(defaultConfig.DBName)
  .collection("Students2022");
