const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "hbs");

app.get("/", (_, res) => {
    res.render("info.hbs", {
        itemVisible: false
    });
});