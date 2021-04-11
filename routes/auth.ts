// add dependencies
import { Router, Request, Response } from "express";

// use dependencies
const router = Router();

// start work to auth routes
router.get("/", (req: Request, res: Response) => {
    res.send("data");
});

// export all auth routes
export default router;
