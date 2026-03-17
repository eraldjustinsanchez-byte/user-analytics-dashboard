(function () {

  const API_URL = "http://localhost:3000/track";

  function generateId(prefix) {
    return prefix + "_" + Math.random().toString(36).substring(2);
  }

  // USER
  let userId = localStorage.getItem("user_id");
  if (!userId) {
    userId = generateId("user");
    localStorage.setItem("user_id", userId);
  }

  // SESSION
  let sessionId = sessionStorage.getItem("session_id");
  if (!sessionId) {
    sessionId = generateId("session");
    sessionStorage.setItem("session_id", sessionId);

    sendEvent("session_start");
  }

  function sendEvent(event) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: event,
        page: window.location.pathname,
        session_id: sessionId,
        user_id: userId,
        timestamp: new Date().toISOString()
      }),
    });
  }

  sendEvent("page_view");

})();