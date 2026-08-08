# Server Dashboard

A modern, responsive server monitoring dashboard built with **Node.js, Express, HTML, CSS, and Vanilla JavaScript**.

The dashboard displays live information about the Node.js server through a simple REST API.

## Features

* 🟢 Real-time server status
* ⚙️ Node.js version
* ⏱️ Server uptime
* 💻 Hostname
* 🖥️ Operating system
* 🔧 CPU architecture
* 🧠 CPU core count
* 💾 Memory usage
* 🌍 Application environment
* 🔄 Manual status refresh
* ♻️ Automatic status refresh every 30 seconds
* 📱 Responsive design for desktop and mobile
* 🌙 Modern dark-themed interface

## Tech Stack

* **Node.js** — JavaScript runtime
* **Express.js** — Web server and API
* **HTML5** — Page structure
* **CSS3** — Styling and responsive layout
* **Vanilla JavaScript** — Frontend functionality

## Project Structure

```text
server-dashboard/
│
├── server.js
├── package.json
│
└── public/
    ├── index.html
    ├── style.css
    └── app.js
```

### File Overview

| File                | Purpose                                 |
| ------------------- | --------------------------------------- |
| `server.js`         | Express server and API                  |
| `package.json`      | Project information and dependencies    |
| `public/index.html` | Dashboard structure                     |
| `public/style.css`  | Dashboard styling                       |
| `public/app.js`     | Fetches and displays server information |

## API

The application provides a status endpoint:

```text
GET /api/status
```

Example response:

```json
{
  "status": "Online",
  "nodeVersion": "v22.x.x",
  "uptime": "0d 0h 5m 32s",
  "hostname": "my-computer",
  "platform": "win32",
  "architecture": "x64",
  "environment": "development",
  "memory": "45 MB",
  "cpuCores": 8,
  "timestamp": "2026-08-08T06:00:00.000Z"
}
```

The frontend uses this API to update the dashboard dynamically.

## Installation

Clone the project and enter the project directory:

```bash
git clone <your-repository-url>
cd server-dashboard
```

Install the dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

Open the address in your browser to view the dashboard.

## Development

The application uses a simple Node.js and Express architecture:

```text
Browser
   │
   │ GET /
   ▼
Express Server
   │
   ├── Serves HTML/CSS/JavaScript
   │
   └── GET /api/status
           │
           ▼
      Server Information
           │
           ▼
        Dashboard
```

## Status Updates

The dashboard retrieves server information when the page loads.

It also automatically refreshes the information every **30 seconds**.

You can manually refresh the information using the **Refresh Status** button.

## Environment

If `NODE_ENV` is not configured, the application displays:

```text
development
```

You can set a different environment when starting the application if needed.

## License

This project is created for learning and educational purposes.
