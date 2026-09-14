import express from "express";

import {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
} from "../controllers/destinationController.js";

import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.route("/").get(getAllDestinations);

// Protected routes
router.route("/").post(protectAdmin, createDestination);

router.route("/:id").get(getDestinationById);

router.route("/:id").put(protectAdmin, updateDestination);

router.route("/:id").delete(protectAdmin, deleteDestination);

export default router;