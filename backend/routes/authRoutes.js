const express = require("express");
const logUser = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const verifyTokenFromCookie = require("../middlewares/verifyCookie");

const router = express.Router();

router.post("/", logUser);

router.get("/protected", verifyTokenFromCookie, isAdmin, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
