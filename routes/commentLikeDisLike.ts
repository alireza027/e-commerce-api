// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all comments likes dis likes with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/comment-like-dis-like");
});

// fetch one comment like dis like with comment_like_dis_like_id
router.get("/:comment_like_dis_like_id", authenticateToken, (req, res) => {
    res.send("/comment-like-dis-like/:comment_like_dis_like_id");
});

// create new comment like dis like with body and authorization header and role
router.post("/create-comment-like-dis-like", authenticateToken, (req, res) => {
    res.send("/comment-like-dis-like/create-comment-like-dis-like");
});

// delete comment like dis like with comment like dis like id and authorization header and role
router.delete("/delete-comment-like-dis-like", authenticateToken, (req, res) => {
    res.send("/comment-like-dis-like/delete-comment-like-dis-like");
});

// export all comment like dis like routes
export default router;
