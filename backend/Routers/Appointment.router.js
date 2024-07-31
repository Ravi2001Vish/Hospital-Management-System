import express from "express";

import {  addCategory, deletecategory, getCategories, getCategory, updatecategory } from "../Controllers/Appointment.controller";
const router = express.Router();

router.get("/get-categories", getCategories);
router.get('/get-category/:category_id',getCategory)
router.post("/add-category",addCategory );
router.put("/update-category/:category_id", updatecategory);
router.delete("/delete-category/:category_id", deletecategory);

export default router;