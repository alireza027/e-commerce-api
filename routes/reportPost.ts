// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all report posts with query
router.get("/", (req, res) => {
    res.send("/report-post");
});

// fetch one report post with report post id
router.get("/:report_post_id", (req, res) => {
    res.send("/report-post/:post_id");
});

// create new report post with body and authorization header and role
router.post("/create-report-post", authenticateToken, (req, res) => {
    res.send("/report-post/create-report-post");
});

// update post with body and authorization header and role
router.put("/update-report-post", authenticateToken, (req, res) => {
    res.send("/report-post/update-report-post");
});

// delete report post with report post id and authorization header and role
router.delete("/delete-report-post", authenticateToken, (req, res) => {
    res.send("/report-post/delete-report-post");
});

// export all report post routes
export default router;
