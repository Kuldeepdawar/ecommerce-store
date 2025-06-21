import express from "express";
// routes
import authRoutes from "./routes/auth.routes.js";
// import dotenv for getiing .env data
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

// get port from.env
const port = process.env.PORT || 5001;

// this is endpoint /api/auth and authRoutes file
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on ${port}`);
});
