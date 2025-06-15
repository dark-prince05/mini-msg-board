const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("servere is running");
});
