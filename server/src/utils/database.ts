// src/utils/database.ts

// TODO: Set up the database connection.

// Hints:
// - Use Mongoose to connect to your MongoDB instance.
// - Create a function to initialize the connection.
// - Use environment variables or a configuration file for the connection URI.

// Example (from a different context):

import mongoose from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI || "mongodb://localhost:27017";

export const initializeDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      // Mongoose connection options can be specified here
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    // Handle the error appropriately
  }
};

export async function connectDB() {
  await initializeDatabase();
}

// Note:
// - Remember to call this initialization function before your application starts listening for requests.
