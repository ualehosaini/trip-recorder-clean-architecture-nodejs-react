const express = require("express");
const cors = require("cors");
const tripRecorderRouter = require("./routes/tripRecorderRouter");
require("./config/db");

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/v1/trip-recorder", tripRecorderRouter);

module.exports = app;