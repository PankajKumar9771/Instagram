import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./Schema.js";

const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();

// Enable CORS for all origins (or specify origin)
app.use(cors());

await mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("db was connected");
});

app.get("/", (req, res) => {
  res.send("Our HomePage");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { credential, password } = req.body;
  const user = new User({ credential, password });
  user
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`accept ${credential} and ${password}`);
  res.status(200).json({ message: "data accepted" });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
