// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all tags with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/tag");
});

// fetch one tag with tag id
router.get("/:tag_id", authenticateToken, (req, res) => {
    res.send("/tag/:tag_id");
});

// create new tag with body and authorization header and role
router.post("/create-tag", authenticateToken, (req, res) => {
    res.send("/tag/create-tag");
});

// update tag with body and authorization header and role
router.put("/update-tag", authenticateToken, (req, res) => {
    res.send("/tag/update-tag");
});

// delete tag with tag id and authorization header and role
router.delete("/delete-tag", authenticateToken, (req, res) => {
    res.send("/tag/delete-tag");
});

// export all tag routes
export default router;
