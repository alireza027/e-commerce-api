// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all money back methods with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/money-back-method");
});

// fetch one money back method with money back method id
router.get("/:money_back_method_id", authenticateToken, (req, res) => {
    res.send("/money-back-method/:money_back_method_id");
});

// create new money back method with body and authorization header and role
router.post("/create-moeny-back-method", authenticateToken, (req, res) => {
    res.send("/money-back-method/create-moeny-back-method");
});

// update money back method with body and authorization header and role
router.put("/update-money-back-mehod", authenticateToken, (req, res) => {
    res.send("/money-back-method/update-money-back-mehod");
});

// delete money back method with money back method id and authorization header and role
router.delete("/delete-money-back-method", authenticateToken, (req, res) => {
    res.send("/money-back-method/delete-money-back-method");
});

// export all money back method routes
export default router;
