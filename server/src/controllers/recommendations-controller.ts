// src/controllers/recommendationsController.ts

import axios from "axios";
import { Request, Response } from "express";
import { cache } from "../cache/config";
import { RecommendationRequestBody } from "../utils/schemas";
import { RecommendationModel } from "../models/recommendation";

export async function generateRecommendations(req: Request, res: Response) {
  const { user_id, preferences } = req.body as RecommendationRequestBody;

  try {
    const cacheKey = `recommendations_${user_id}`;
    if (cache.has(cacheKey)) {
      return res.json({
        user_id,
        recommendations: cache.get(cacheKey),
        source: "cache",
      });
    }

    // Call the mock LLM agent
    const response = await axios.post("http://localhost:8080/llm/generate", {
      preferences,
    });

    if (response) {
      const recommendations = response.data.recommendations;
      // caching
      cache.set(cacheKey, recommendations);

      // mongodb
      const dbResponse = await RecommendationModel.create({
        userRef: user_id,
        suggestions: recommendations,
      });

      res.json({
        user_id: dbResponse.userRef,
        recommendations: dbResponse.suggestions,
        source: "db",
      });
    }
  } catch (error) {
    // console.error("Error generating recommendations:", error);
    res
      .status(500)
      .json({ error: "Unable to fetch recommendations at this time." });
  }
}
