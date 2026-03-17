(function () {

  const API_URL = "http://localhost:3000/track";

  // Generate random session ID
  function generateSessionId() {
    return "session_" + Math.random().toString(36).substring(2);
  }

  // Get or create session ID
  let sessionId = localStorage.getItem("session_id");

  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem("session_id", sessionId);
  }

  function sendEvent(event, page) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: event,
        page: page,
        session_id: sessionId,
      }),
    })
    .then(res => res.json())
    .then(data => console.log("Tracked:", data))
    .catch(err => console.error("Error:", err));
  }

  // Track page view
  sendEvent("page_view", window.location.pathname);

})();