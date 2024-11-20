// src/routes/recommendations.ts

/**
 * TODO: Set up the `/recommendations` POST route.
 *
 * Steps:
 * 1. Apply validation middleware to validate the request body.
 * 2. Use the `generateRecommendations` controller to handle the request.
 * 3. Handle validation errors appropriately.
 *
 * Hints:
 * - Use `express-validator` for input validation.
 * - Use `validationResult` to check for validation errors.
 */

// Example (from a different context):

import { validationResult } from "express-validator";
import express, { Request, Response } from "express";
import { validateRecommendations } from "../utils/schemas";
import { generateRecommendations } from "../controllers/recommendations-controller";

const router = express.Router();

// POST /recommendations
router.post(
  "/",
  validateRecommendations,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await generateRecommendations(req, res);
  }
);

export default router;
