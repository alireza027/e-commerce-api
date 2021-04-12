// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all video uploads with query
router.get("/", (req, res) => {
    res.send("/video-upload");
});

// fetch one video upload with video upload id
router.get("/:video_upload_id", (req, res) => {
    res.send("/video-upload/:video_upload_id");
});

// create new video upload with body and authorization header and role
router.post("/create-upload", authenticateToken, (req, res) => {
    res.send("/video-upload/create-upload");
});

// update video upload with body and authorization header and role
router.put("/update-video-upload", authenticateToken, (req, res) => {
    res.send("/video-upload/update-video-upload");
});

// delete video upload with video upload id and authorization header and role
router.delete("/delete-video-upload", authenticateToken, (req, res) => {
    res.send("/video-upload/delete-video-upload");
});

// export all video upload routes
export default router;
