// src/hooks/useRecommendationPost.ts
import axios from "axios";
import { RecommendationType } from "@/schema/recommendation.schema";
import { useState, useCallback } from "react";

export const useRecommendationPost = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const postRecommendation = useCallback(async (data: RecommendationType) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/recommendations",
        data
      );
      console.log("resp:", response);
      return response;
    } catch (err) {
      console.error("Error posting recommendation:", err);
      setError(new Error("Recommendation Post Failed!!"));
    } finally {
      setLoading(false);
    }
  }, []);

  return { postRecommendation, isLoading, error };
};
