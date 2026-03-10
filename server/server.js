const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Analytics API running");
});

app.post("/track", (req, res) => {
    const event = req.body;

    console.log("Event received:", event);

    res.json({
        message: "Event received"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});