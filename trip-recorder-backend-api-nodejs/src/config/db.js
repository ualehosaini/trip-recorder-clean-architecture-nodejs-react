const mongoose = require('mongoose');

// Load envireonment variables from .env file
require('dotenv').config();

const connectionString = process.env.MONGODB_URI || "mongodb+srv://MongoDb:12345@myreactecommercedb.ior44.mongodb.net/?retryWrites=true&w=majority";

// Connect to the database
mongoose.set("strictQuery", false);
mongoose.connect(connectionString);

const db = mongoose.connection;

// Handle database connection error
db.on("error", (error) => {
  console.error("MongoDB Database connection error:", error);
});

// Handle successful database connection
db.once("open", () => {
  console.log("MongoDB Database connection successful");
});