import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// mongoose connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("mongodb error:", err));

// start server using app from app.js
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});