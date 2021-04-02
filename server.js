const express = require("express");
const app = express();
const port = 8081;

app.use(express.static("client"));

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
