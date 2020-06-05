const express = require("express");
const app = express();

const port = 3000;

app.use("/", require("./routes").router);

app.listen(port);

module.exports = app;
