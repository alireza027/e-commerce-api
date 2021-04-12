// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all bookmark with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/bookarmk");
});

// fetch one bookarmk with bookmark id
router.get("/:bookmark_id", authenticateToken, (req, res) => {
    res.send("/bookarmk");
});

// create new bookmark with body and authorization header and role
router.get("/create-bookmark", authenticateToken, (req, res) => {
    res.send("/bookarmk/create-bookmark");
});

// delete bookmark with bookmark id and authorization header and role
router.delete("/delete-bookmark", authenticateToken, (req, res) => {
    res.send("/bookarmk/delete-bookmark");
});

// export all auth routes
export default router;
