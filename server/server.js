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

app.get("/analytics/visitors", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(DISTINCT session_id) AS visitors FROM events"
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/analytics/pages", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT page, COUNT(*) AS views FROM events GROUP BY page ORDER BY views DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/analytics/sessions", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(DISTINCT session_id) AS sessions FROM events"
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});