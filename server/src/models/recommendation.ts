// src/models/Recommendation.ts

// TODO: Define the Mongoose schema and model for storing recommendations.

// Hints:
// - Define a schema that includes:
//   - `userRef`: string
//   - `suggestions`: string[]
// - Create a TypeScript interface for type safety (without using the 'I' prefix).
// - Export the Mongoose model to be used in other parts of your application.

import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the document
export interface RecommendationDocument extends Document {
  userRef: string;
  suggestions: string[];
}

// Create the schema
const RecommendationSchema: Schema = new Schema({
  userRef: { type: String, required: true, unique: true, index: true },
  suggestions: { type: [String], required: true },
});

// Export the model
export const RecommendationModel = mongoose.model<RecommendationDocument>(
  "Recommendation",
  RecommendationSchema
);
