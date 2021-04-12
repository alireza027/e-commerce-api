// add dependencies
import { Router } from "express";

// add middlewares
import authenticateToken from "../middlewares/authenticateToken";

// use dependencies
const router = Router();

// fetch all order with query
router.get("/", authenticateToken, (req, res) => {
    res.send("/order");
});

// fetch one order with order id
router.get("/:order_id", authenticateToken, (req, res) => {
    res.send("/order/:order_id");
});

// create new order with body and authorization header and role
router.post("/create-order", authenticateToken, (req, res) => {
    res.send("/order/create-order");
});

// update order with body and authorization header and role
router.put("/update-order", authenticateToken, (req, res) => {
    res.send("/order/update-order");
});

// delete order with order id and authorization header and role
router.delete("/delete-order", authenticateToken, (req, res) => {
    res.send("/order/delete-order");
});

// export all order routes
export default router;
