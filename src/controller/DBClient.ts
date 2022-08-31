import * as mongodb from "mongodb";
import defaultConfig from "../../config/default.json";
const client: mongodb.MongoClient = new mongodb.MongoClient(defaultConfig.MongoDBURL);
client
  .connect()
  .then((res) => {
    console.log("MongoDB ulandi...");
  })
  .catch((e) => {
    console.error("MongoDb ulanmadi. ", e);
    process.exit(1);
  });

export default client;
