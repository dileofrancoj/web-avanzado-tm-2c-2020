var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();
const noticias = require("./routes/noticias");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/noticias", noticias);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ message: "Página no encontrada" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(500).json({ message: "Internal server error" });
  // render the error page
  //res.status(err.status || 500).json();
  // res.render(error) --> MAL desde el back no renderizo vistas D:
  //res.send("500") --> MAL porque no cumple el formato de api rest
});

module.exports = app;
