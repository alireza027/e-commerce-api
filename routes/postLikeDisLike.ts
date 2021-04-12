// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all posts likes dis likes with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/post-like-dis-like");
});

// fetch one post like dis like with post_like_dis_like_id
router.get("/:post_like_dis_like_id", authenticateToken, (req, res) => {
    res.send("/post-like-dis-like/:post_like_dis_like_id");
});

// create new post like dis like with body and authorization header and role
router.post("/create-post-like-dis-like", authenticateToken, (req, res) => {
    res.send("/post-like-dis-like/create-post-like-dis-like");
});

// delete post like dis like with post like dis like id and authorization header and role
router.delete("/delete-post-like-dis-like", authenticateToken, (req, res) => {
    res.send("/post-like-dis-like/delete-post-like-dis-like");
});

// export all post like dis like routes
export default router;
