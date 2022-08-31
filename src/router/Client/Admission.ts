import {
  application,
  NextFunction,
  Request,
  Response,
  Router,
  RouterOptions,
} from "express";
import Files from "../../controller/Files";
import cors from "cors";

// import middlewares
import DotParser from "../../middlewares/dotParser";

// import students DB
import { StudentsDB } from "../../controller/Stundents";

// improt Custom Errors
import AlreadyExistsError from "../../Errors/AlreadyExistsError";

const router: Router = Router();

router.use(cors({ origin: "*" }));

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("<h1>Client side</h1>");
});

router.post(
  "/",
  Files.any(),
  DotParser,
  async (req: Request, res: Response, next: NextFunction) => {
    const student = await StudentsDB.findOne({
      jshir: req.body.jshir,
    });
    // console.log("student", student);
    if (student != null) {
      return next(
        new AlreadyExistsError(
          "Bu foydalanuvchi avval ro'yxatdan o'tgan",
          409,
          "Already Exists"
        )
      );
    }
    StudentsDB.insertOne(req.body);
    res.status(200).send("/download/12342");
  }
);

export default router;
