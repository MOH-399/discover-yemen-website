import express from "express";
import {
  getFood,
  createFood,
  updateFood,
  deleteFood,
} from "../controllers/foodController.js";
import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getFood).post(protectAdmin, createFood);

router
  .route("/:id")
  .put(protectAdmin, updateFood)
  .delete(protectAdmin, deleteFood);

export default router;