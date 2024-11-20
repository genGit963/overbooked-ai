import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import recommendationsRouter from "./routes/recommendations";
import usersRouter from "./routes/users";
import { connectDB } from "./utils/database";

const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

app.use("/recommendations", recommendationsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Server is on ....");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
