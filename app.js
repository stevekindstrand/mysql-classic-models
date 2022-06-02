var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mysql = require("mysql2");

var indexRouter = require("./routes/index");
var contactRouter = require("./routes/contact");
var productsRouter = require("./routes/products");

var app = express();

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "classicmodels",
  password: "KD6uVUogS!jsp*DX",
  database: "classicmodels",
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/products", productsRouter);

module.exports = app;
