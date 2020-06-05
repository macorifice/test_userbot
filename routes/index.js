const getNumeriPrimi = require("../src/functions/getNumeriPrimi");

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Welcome to userbot.ai!" });
});

router.get("/primi/:n", function (req, res, next) {
  const isAnInteger = Number.isInteger(parseInt(req.params.n));
  let response;

  if (req.params.n <= 0) {
    res.send({
      statusCode: 500,
      message: "Input is minor or equal than 0",
    });
    return next();
  }

  if (isAnInteger) {
    try {
      const resultPrimi = getNumeriPrimi(req.params.n);
      response = {
        statusCode: 200,
        message: "Result of primi : " + resultPrimi,
      };
    } catch (e) {
      response = {
        statusCode: 500,
        message: "Error : " + e,
      };
    }

    res.send(response);
    return next();
  }
  res.send({
    statusCode: 500,
    message: "Input is not an integer",
  });
  return next();
});

module.exports.router = router;
