# User Analytics Dashboard

A full-stack analytics system that collects user interaction events from websites and provides insights through an analytics dashboard.

The system simulates how modern analytics platforms work by collecting behavioral events, processing them through a backend API, and making them available for visualization.

---

# Goal

Build a system that can:

• Capture user interactions from a website
• Send those interactions to a backend API
• Process and store event data
• Provide analytics data for dashboards and reporting

The project demonstrates how data flows through a full-stack analytics pipeline.

---

# Features

Event Collection
Capture user interaction events such as page views or clicks.

Event Ingestion API
Receive event data from clients through HTTP requests.

Data Processing
Validate and process incoming event data.

Analytics Data Access
Expose endpoints that allow analytics data to be retrieved.

Visualization
Display analytics metrics through a dashboard interface.

---

# Components

Client

Represents any application or website sending analytics events.

Example event:

```json
{
  "event": "page_view",
  "page": "/home"
}
```

---

Tracker Script

A lightweight JavaScript script embedded in websites that captures user actions and sends them to the backend API.

Example usage:

```
<script src="tracker.js"></script>
```

---

Backend API

Handles incoming HTTP requests and processes event data.

Key endpoint:

```
POST /track
```

Responsibilities:

• Receive event data
• Parse request body
• Process events
• Send response back to client

---

Database (Future Component)

Stores event data for analytics processing.

Example event record:

```
event_type
page
timestamp
user_agent
session_id
```

---

Analytics Dashboard

A frontend interface that retrieves analytics data from the backend API and visualizes insights.

Example analytics:

• Visitors per day
• Top pages
• Traffic sources
• Device usage

---

# Logic

The system processes analytics data through the following flow:

1. A user interacts with a website.
2. The tracker script captures the event.
3. The event is sent to the backend API.
4. The backend processes the event.
5. The event is stored for analytics processing.
6. The dashboard retrieves analytics data from the API.

---

# Interactions

Client → Backend API

The client sends analytics events using HTTP requests.

Example request:

```
POST /track
```

Request body:

```json
{
  "event": "page_view",
  "page": "/home"
}
```

---

Backend API → Client

The server confirms that the event was received.

Example response:

```json
{
  "message": "Event received"
}
```

---

Dashboard → Backend API

The dashboard retrieves analytics data through API endpoints.

Example:

```
GET /analytics/visitors
```

Response example:

```json
{
  "visitors_today": 421
}
```