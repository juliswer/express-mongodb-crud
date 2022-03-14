import "dotenv/config";

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/crud-mongo",
  PORT: process.env.PORT || 3000,
};
