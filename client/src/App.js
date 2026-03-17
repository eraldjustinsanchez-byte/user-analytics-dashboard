import { useEffect, useState } from "react";

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

      <h2>Visitors: {visitors}</h2>
      <h2>Sessions: {sessions}</h2>

      <h2>Top Pages</h2>
      <ul>
        {pages.map((p, index) => (
          <li key={index}>
            {p.page} - {p.views} views
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;