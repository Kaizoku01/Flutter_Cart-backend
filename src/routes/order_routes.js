const OrderRoutes = require('express').Router();
const OrderController = require('./../controllers/order_controller');

OrderRoutes.get("/:userId", OrderController.fetchOrdersForUser);
OrderRoutes.put("/updateStatus", OrderController.updateOrderStatus);
OrderRoutes.post("/", OrderController.createOrder);


module.exports = OrderRoutes;