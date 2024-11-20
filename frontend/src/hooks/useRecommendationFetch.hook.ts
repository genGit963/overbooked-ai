// src/hooks/useRecommendationFetch.ts
import axios from "axios";
import { useState, useCallback } from "react";

export const useRecommendationFetch = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<{
    user_id: string;
    recommendations: string[];
    source: string;
  }>({
    user_id: "",
    recommendations: [],
    source: "",
  });

  const fetchRecommendations = useCallback(async (user_id: string) => {
    if (!user_id) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/users/${user_id}/recommendations`
      );
      setData(response.data);

      if (response.status == 404) {
        setData({
          user_id: "",
          recommendations: [],
          source: "",
        });
        console.log("respaklmdadm : ", response);
        setError(response.data.error);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, fetchRecommendations, isLoading, error };
};
