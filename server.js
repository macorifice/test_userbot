const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to test userbot.ai");
});

app.get("/primi", function (req, res) {
  const resultPrimi = primi(req.query.n);
  res.send("Result of primi : ", JSON.stringify(resultPrimi));
  
});

const primi = (n) => {
  const result = [];
  for (const i = 0; i <= n; i++) {
    if (n > 0) {
      result.push(n);
    }

    return result;
  }
};

app.listen(3000);
