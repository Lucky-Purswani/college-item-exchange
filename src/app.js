import express from "express";
import cors from "cors";

const app = express();

// ---------------- MIDDLEWARES ----------------

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());



// ---------------- GLOBAL ERROR HANDLER ----------------

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

export default app;
