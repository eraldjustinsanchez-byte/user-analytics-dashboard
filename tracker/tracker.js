(function () {

  const API_URL = "http://localhost:3000/track";

  function sendEvent(event, page) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: event,
        page: page,
      }),
    })
    .then(res => res.json())
    .then(data => console.log("Tracked:", data))
    .catch(err => console.error("Error:", err));
  }

  // Track page view
  sendEvent("page_view", window.location.pathname);

})();