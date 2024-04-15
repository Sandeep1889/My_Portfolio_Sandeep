const express = require("express");
const router = require("./route/contact.js");
const connectDb = require("./confi/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
connectDb();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.status(200).send("<h1>dfghj</h1>");
});
app.listen(8080, () => {
  console.log("server runing on port 8080");
});
