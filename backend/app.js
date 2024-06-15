const express = require("express");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(morgan("dev"));
app.use(cookieParser());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/auth", authRoutes);

//Middlewares

module.exports = app;
