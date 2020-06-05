const getNumeriPrimi = require("../src/functions/getNumeriPrimi");

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Welcome to userbot.ai!" });
});

router.get("/primi", function (req, res) {
  const resultPrimi = getNumeriPrimi(req.query.n);
  const response = res.json({
    message: "Result of primi : " + JSON.stringify(resultPrimi),
  });
  res.status(200).send(response);
});

module.exports.router = router;
