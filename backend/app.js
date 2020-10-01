var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const personas = require("./routes/personas");
const categorias = require("./routes/categorias");
const cursos = require("./routes/cursos");
const cursadas = require("./routes/cursadas");
const auth = require("./routes/auth");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/personas", personas); // http://localhost:3000/personas
// catch 404 and forward to error handler
app.use("/categorias", categorias);
app.use("/cursos", cursos);
app.use("/cursadas", cursadas);
app.use("/auth", auth);

app.use(function (req, res, next) {
  res.status(404).json({ message: "Página no encontrada" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
