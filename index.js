
const express = require("express");
require('dotenv').config();

const app = express();
// app.use(express);

app.get("/", (req, res) => {
    res.status(200).json("working fine");
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("running on port " + port);
})