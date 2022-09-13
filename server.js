const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
const indexRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.use("/", indexRouter);

app.listen(5000, () => {
  console.log(`server listening on port ${PORT}`);
});
