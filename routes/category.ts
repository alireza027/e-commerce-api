// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all category with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/category");
});

// fetch one post with category id
router.get("/:category_id", authenticateToken, (req, res) => {
    res.send("/category/:category_id");
});

// create new category with body and authorization header and role
router.post("/create-category", authenticateToken, (req, res) => {
    res.send("/category/create-category");
});

// update category with body and authorization header and role
router.put("/update-category", authenticateToken, (req, res) => {
    res.send("/category/update-category");
});

// delete category with category id and authorization header and role
router.delete("/delete-category", authenticateToken, (req, res) => {
    res.send("/category/delete-category");
});

// export all bookmark routes
export default router;
