// src/controllers/usersController.ts

import { Request, Response } from "express";
import { cache } from "../cache/config";
import { RecommendationModel } from "../models/recommendation";

// GET /users/:user_id/recommendations
export async function getUserRecommendations(req: Request, res: Response) {
  try {
    const { user_id } = req.params;

    // checking user_id in db
    const dbResponse = await RecommendationModel.findOne({
      userRef: user_id,
    });
    if (!dbResponse) {
      throw { user_id };
    }

    // from cache
    const cacheKey = `recommendations_${user_id}`;
    if (cache.has(cacheKey)) {
      return res.json({
        user_id,
        recommendations: cache.get(cacheKey),
        source: "cache",
      });
    } else {
      const recommendations = dbResponse.suggestions;
      res.status(200).json({ user_id, recommendations, source: "db" });
    }
  } catch (error: any) {
    res.status(404).json({
      error: `No recommendations found for user_id ${error.user_id}.`,
    });
  }
}
