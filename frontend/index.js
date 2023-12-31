const axios = require("axios");
const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));

app.get("/", async (req, res) => {
    res.render("index");
});

app.listen(3006, () => {
    console.log("app listening on port 3006");
});
