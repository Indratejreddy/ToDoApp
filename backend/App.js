const express = require("express");
const connect = require("./config/DataBaseConfig");
const app = express();
const route = require("./routes/ToDoRoutes");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Establishing database connection
connect();

app.use("/", route);

module.exports = app;
