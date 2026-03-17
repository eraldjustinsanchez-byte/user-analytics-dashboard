import { useEffect, useState } from "react";
import PagesChart from "./PagesChart";

function App() {
  const [visitors, setVisitors] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/analytics/visitors")
      .then(res => res.json())
      .then(data => setVisitors(data.visitors));

    fetch("http://localhost:3000/analytics/sessions")
      .then(res => res.json())
      .then(data => setSessions(data.sessions));

    fetch("http://localhost:3000/analytics/pages")
      .then(res => res.json())
      .then(data => setPages(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>Visitors</h3>
          <p>{visitors}</p>
        </div>

        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>Sessions</h3>
          <p>{sessions}</p>
        </div>
      </div>

      <h2>Page Views</h2>
      <PagesChart data={pages} />
    </div>
  );
}

export default App;