const path = require("path");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");

const app = express();

/**
 * Middleware
 */
app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * API Routes
 */
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

/**
 * Static Assets
 */
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = app;
