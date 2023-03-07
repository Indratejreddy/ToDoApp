const express = require("express");
const connect = require("./config/DataBaseConfig");
const app = express();
const CORS = require("cors");
app.use(
  CORS({
    origin: "http://localhost:3000",
  })
);
const route = require("./routes/ToDoRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Establishing database connection
connect();

app.use("/", route);

module.exports = app;
