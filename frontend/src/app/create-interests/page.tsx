"use client";

import React, { useState } from "react";
import { RecommendationType } from "@/schema/recommendation.schema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useRecommendationPost } from "@/hooks/useRecommendationPost.hook";

const CreateInterestPage = () => {
  const [userId, setUserId] = useState<RecommendationType["user_id"]>("");
  const [preferences, setPreferences] = useState<string[]>([
    "science fiction",
    "artificial intelligence",
    "space exploration",
  ]);

  const { postRecommendation, isLoading, error } = useRecommendationPost();

  const handleNewInterest = () => {
    setPreferences((prevPreferences) => [...prevPreferences, ""]);
  };

  const handleRemoveInterest = (index: number) => {
    const updatedPreferences = preferences.filter((_, i) => i !== index);
    setPreferences(updatedPreferences);
  };

  const handlePreferenceChange = (index: number, value: string) => {
    const updatedPreferences = [...preferences];
    updatedPreferences[index] = value;
    setPreferences(updatedPreferences);
  };

  const handleSubmit = async () => {
    const data = {
      user_id: userId,
      preferences: preferences,
    };

    // Call the postRecommendation hook to send the data
    try {
      const response = await postRecommendation(data);
      if (response) {
        alert("Submit Successful");
      }
    } catch (err) {
      console.error("Error posting recommendation:", err);
    }
  };

  return (
    <div className="w-1/2 my-4 mx-auto items-center">
      <h1 className="mb-4 text-2xl lg:text-4xl font-black text-teal-700 text-center border-b">
        Create Interest
      </h1>

      {/* user_id */}
      <div className="lg:flex flex-row items-center p-2 justify-start gap-24 my-6">
        <Label htmlFor="user_id" className="w-16">
          user_id:{" "}
        </Label>
        <Input
          type="text"
          required
          value={userId}
          placeholder="123"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      {/* preferences */}
      <div className="lg:flex flex-row items-start p-2 justify-start gap-4 my-6">
        <Label htmlFor="preferences" className="w-20 h-max">
          Preferences
        </Label>
        <div className="h-fit w-full space-y-4">
          {preferences.map((preference, index) => (
            <div key={index} className="flex items-center gap-2">
              {/* Remove Button */}
              <Button
                variant="ghost"
                onClick={() => handleRemoveInterest(index)}
              >
                <Minus color="red" size={18} />
              </Button>

              {/* Preference Input */}
              <Input
                type="text"
                value={preference}
                placeholder={`Interest ${index + 1}`}
                onChange={(e) => handlePreferenceChange(index, e.target.value)}
              />
            </div>
          ))}
          <Button variant="ghost" onClick={handleNewInterest} className="mt-2">
            <Plus color="green" size={36} />
          </Button>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full mt-6 bg-green-400 text-black font-bold text-1xl hover:text-white hover:bg-green-900"
        disabled={isLoading} // Disable the button while loading
      >
        {isLoading ? "Submitting..." : "Submit"}
      </Button>

      {/* Error Handling */}
      {error && <div className="text-red-500 mt-4">{error.message}</div>}
    </div>
  );
};

export default CreateInterestPage;
