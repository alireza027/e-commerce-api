// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all config with query
router.get("/", (req, res) => {
    res.send("/config");
});

// fetch one config with config id
router.get("/:config_id", (req, res) => {
    res.send("/config/:config_id");
});

// create new config with body and authorization header and role
router.post("/create-config", authenticateToken, (req, res) => {
    res.send("/config/create-config");
});

// update config with body and authorization header and role
router.put("/update-config", authenticateToken, (req, res) => {
    res.send("/config/update-config");
});

// delete config with config id and authorization header and role
router.delete("/delete-config", authenticateToken, (req, res) => {
    res.send("/config/delete-config");
});

// export all config routes
export default router;
