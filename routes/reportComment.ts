// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all report comments with query
router.get("/", (req, res) => {
    res.send("/report-comment");
});

// fetch one report comment with report comment id
router.get("/:report_comment_id", (req, res) => {
    res.send("/report-comment/:comment_id");
});

// create new report comment with body and authorization header and role
router.post("/create-report-comment", authenticateToken, (req, res) => {
    res.send("/report-comment/create-report-comment");
});

// update report comment with body and authorization header and role
router.put("/update-report-comment", authenticateToken, (req, res) => {
    res.send("/report-comment/update-report-comment");
});

// delete report comment with report report comment id and authorization header and role
router.delete("/delete-report-comment", authenticateToken, (req, res) => {
    res.send("/report-comment/delete-report-comment");
});

// export all report comment routes
export default router;
