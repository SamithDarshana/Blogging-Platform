const express = require("express");
const logUser = require("../controllers/authController");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

router.post("/", logUser);

router.get("/protected", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
