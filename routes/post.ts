// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all posts with query
router.get("/", (req, res) => {
    res.send("/product");
});

// fetch one post with product id
router.get("/:product_id", (req, res) => {
    res.send("/product/:product_id");
});

// fetch data with search => test route
router.get("/search", (req, res) => {
    res.send("/product/search");
});

// create new post with body and authorization header and role
router.post("/create-product", authenticateToken, (req, res) => {
    res.send("/product/create-product");
});

// update post with body and authorization header and role
router.put("/update-post", authenticateToken, (req, res) => {
    res.send("/product/update-post");
});

// delete post with post id and authorization header and role
router.delete("/delete-product", authenticateToken, (req, res) => {
    res.send("/product/delete-product");
});

// export all post routes
export default router;
