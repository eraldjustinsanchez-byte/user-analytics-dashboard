const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/track", async (req, res) => {
  const { event, page, session_id } = req.body;

  try {
    await pool.query(
      "INSERT INTO events (event_type, page, session_id) VALUES ($1, $2, $3)",
      [event, page, session_id]
    );

    res.json({ message: "Event stored" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});