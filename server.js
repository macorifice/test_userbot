const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to test userbot.ai");
});

app.get("/primi", function (req, res) {
  const resultPrimi = primi(req.query.n);
  const response = "Result of primi : " + JSON.stringify(resultPrimi)
  res.status(200).send(response)
});

const mod = (a, n) => {
  return a - (n * Math.floor(a/n));
}

const numeri_primi = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

const primi = (n) => {
  const result = [];

  for (let index = 0; index <= numeri_primi.length; index++) {
    if (numeri_primi[index] < n)
      result.push(numeri_primi[index]);
    }
    
      return result;
    
};


app.listen(3000);
