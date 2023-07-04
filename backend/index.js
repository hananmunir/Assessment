//required modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import todoRoutes from "./routes/todo.js";

//Configuration
dotenv.config();
const PORT = process.env.PORT || 8800;

const app = express();
// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/todo", todoRoutes);

app.get("/", (req, res) =>
  res.status(200).json({ message: "Everything Works Fine" })
);

// Database connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server Running on Port: ", PORT));
    // task();
  })
  .catch((error) => {
    console.log(error);
  });

export default app;
