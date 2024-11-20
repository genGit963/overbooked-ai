// src/routes/users.ts
import express, { Request, Response } from "express";
import { getUserRecommendations } from "../controllers/users-controller";
const router = express.Router();

// GET /users/:user_id/recommendations
router.get("/:user_id/recommendations", async (req: Request, res: Response) => {
  // controllers
  await getUserRecommendations(req, res);
});

export default router;
