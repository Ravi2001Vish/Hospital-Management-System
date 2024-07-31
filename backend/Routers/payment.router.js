import express from "express";
import { addPayment, deletePayment, getPayment, getPayments, updatePayment } from "../Controllers/payment.controller";
const router = express.Router();

router.get("/get-payments", getPayments);
router.get('/get-payment/:payment_id',getPayment)
router.post("/add-payment",addPayment );
router.put("/update-payment/:payment_id",updatePayment);
router.delete("/delete-payment/:payment_id", deletePayment);

export default router;