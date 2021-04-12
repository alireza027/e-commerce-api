// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all menus with query
router.get("/", (req, res) => {
    res.send("/menu");
});

// fetch one menu with menu id
router.get("/:menu_id", authenticateToken, (req, res) => {
    res.send("/menu/:menu_id");
});

// create new menu with body and authorization header and role
router.post("/create-menu", authenticateToken, (req, res) => {
    res.send("/menu/create-menu");
});

// update menu with body and authorization header and role
router.put("/update-menu", authenticateToken, (req, res) => {
    res.send("/menu/update-menu");
});

// delete menu with menu id and authorization header and role
router.delete("/delete-menu", authenticateToken, (req, res) => {
    res.send("/menu/delete-menu");
});

// export all menu routes
export default router;
