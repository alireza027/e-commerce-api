// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all roles with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/role");
});

// fetch one role with role id
router.get("/:role_id", authenticateToken, (req, res) => {
    res.send("/role/:role_id");
});

// create new role with body and authorization header and role
router.post("/create-role", authenticateToken, (req, res) => {
    res.send("/role/create-role");
});

// update role with body and authorization header and role
router.put("/update-role", authenticateToken, (req, res) => {
    res.send("/role/update-role");
});

// delete role with role id and authorization header and role
router.delete("/delete-role", authenticateToken, (req, res) => {
    res.send("/role/delete-role");
});

// export all role routes
export default router;
