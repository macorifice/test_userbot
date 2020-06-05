const getNumeriPrimi = require("../src/functions/getNumeriPrimi");

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "Welcome to userbot.ai!" });
});

router.get("/primi/:n", function (req, res) {
  const isAnInteger = Number.isInteger(parseInt(req.params.n));
  let response;

  if (req.params.n <= 0) {
    res.send(
      res.json({
        statusCode: 500,
        message: "Input is minor or equal than 0",
      })
    );
  }

  if (isAnInteger) {
    try {
      const resultPrimi = getNumeriPrimi(req.params.n);
      response = res.json({
        statusCode: 200,
        message: "Result of primi : " + resultPrimi,
      });
    } catch (e) {
      response = res.json({
        statusCode: 500,
        message: "Error : " + e,
      });
    }

    res.send(response);
  }
  res.send(
    res.json({
      statusCode: 500,
      message: "Input is not an integer",
    })
  );
});

module.exports.router = router;
