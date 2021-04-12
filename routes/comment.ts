// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all comment with query
router.get("/", (req, res) => {
    res.send("/comment");
});

// fetch one comment with comment id
router.get("/:comment_id", (req, res) => {
    res.send("/comment/:comment_id");
});

// create new comment with body and authorization header and role
router.post("/create-comment", authenticateToken, (req, res) => {
    res.send("/comment/create-comment");
});

// update comment with body and authorization header and role
router.put("/update-comment", authenticateToken, (req, res) => {
    res.send("/comment/update-comment");
});

// delete comment with comment id and authorization header and role
router.delete("/delete-comment", authenticateToken, (req, res) => {
    res.send("/comment/delete-comment");
});

// export all comment routes
export default router;
