"use client";

import React, { useState } from "react";
import { RecommendationType } from "@/schema/recommendation.schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRecommendationFetch } from "@/hooks/useRecommendationFetch.hook";

const GetInterestsPage = () => {
  const [userId, setUserId] = useState<RecommendationType["user_id"]>("");
  const { data, fetchRecommendations, isLoading, error } =
    useRecommendationFetch();

  // Fetch recommendations when Enter is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userId) {
      fetchRecommendations(userId);
    }
  };

  return (
    <div className="w-1/2 my-4 mx-auto items-center">
      <h1 className="mb-4 text-2xl lg:text-4xl font-black text-teal-700 text-center border-b">
        Get Interests
      </h1>

      {/* user_id */}
      <div className="lg:flex flex-row items-start p-2 justify-start gap-8 my-6">
        <Label htmlFor="user_id" className="w-16">
          user_id:{" "}
        </Label>
        <div className="flex-1">
          <Input
            type="text"
            required
            value={userId}
            placeholder="123"
            className="text-center"
            onKeyDown={handleKeyDown}
            onChange={(e) => setUserId(e.target.value)}
          />
          {userId && (
            <Label className="my-2">
              Press{" "}
              <span className="bg-gray-500 px-1 py-0.5 rounded-sm text-teal-300">
                Enter
              </span>{" "}
              to fetch....
            </Label>
          )}
        </div>
      </div>

      {/* preferences */}
      <div className="lg:flex flex-row items-start p-2 justify-start gap-4 my-6">
        <Label htmlFor="preferences" className="w-20 h-max">
          {""}
        </Label>
        <div className="h-fit w-full space-y-4">
          {isLoading && <p>Loading recommendations...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!error &&
          userId === data.user_id &&
          data.recommendations.length > 0 ? (
            data?.recommendations.map((recommendation, index) => (
              <h1
                key={index + recommendation.length}
                className="border border-gray-300 p-1 rounded-md text-center"
              >
                {recommendation}
              </h1>
            ))
          ) : (
            <p className="border border-gray-300 rounded-md p-1 text-center text-red-600">
              No preferences found for this user {userId}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInterestsPage;
