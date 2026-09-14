import express from "express";

import {
  getCulture,
  createCulture,
  updateCulture,
  deleteCulture,
} from "../controllers/cultureController.js";

import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(getCulture)
  .post(protectAdmin, createCulture);

router
  .route("/:id")
  .put(protectAdmin, updateCulture)
  .delete(protectAdmin, deleteCulture);

export default router;