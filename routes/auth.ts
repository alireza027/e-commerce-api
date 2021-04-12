// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch user data after signin
router.get("/", authenticateToken, (req, res) => {
    res.send("/");
});

// signin route or login route
router.post("/signin", authenticateToken, (req, res) => {
    res.send("/signin");
});

// signup route or create user route
router.post("/signin", authenticateToken, (req, res) => {
    res.send("/signin");
});

router.put("/update-user", authenticateToken, (req, res) => {
    res.send("/update-user");
});

router.delete("/delete-user", authenticateToken, (req, res) => {
    res.send("/delete-user");
});

// export all auth routes
export default router;
