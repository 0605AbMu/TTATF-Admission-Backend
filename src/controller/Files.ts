import client from "./DBClient";
import defaulConfig from "../../config/default.json";
import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";


const filesDb:any = client.db(defaulConfig.DBName);

export default multer({
    storage: new GridFsStorage({db: filesDb, url: defaulConfig.MongoDBURL})
})


