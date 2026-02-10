// Initialize express application
const express = require("express");
const engine = require("express-handlebars");
const app = express();

app.engine("handlebars", engine.engine());
app.set("view engine", "handlebars");

const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Basic get request handler (routes)
app.get("/", (req, res) => {
  //res.send("Hello World!");
  //res.sendFile(path.join(__dirname, "myapp", "app", "public", "homepage.html"));
  res.render("homepage", { title: "Welcome to my homepage" });
});

app.get("/about", (req, res) => {
  res.send("this is the about page");
});

app.post("/about", (req, res) => {
  console.log(req.body);
  res.send("this is a post request to the about page");
});

app.put("/about", (req, res) => {
  res.send("this is a put request to the about page");
});
app.delete("/about", (req, res) => {
  res.send("this is a delete request to the about page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
