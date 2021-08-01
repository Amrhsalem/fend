var path = require("path");
const express = require("express");
const parsedText = require("./API.js");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.post("/test", function (req, res) {
  parsedText(req.body)
    .then((ans) => {
      console.log(ans);
      res.send(ans);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});
