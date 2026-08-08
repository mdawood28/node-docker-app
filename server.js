const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/status", (req, res) => {
    const uptime = process.uptime();

    res.json({
        status: "Online",
        nodeVersion: process.version,
        uptime: formatUptime(uptime),
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        environment: process.env.NODE_ENV || "development",
        memory: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
        cpuCores: os.cpus().length,
        timestamp: new Date().toISOString()
    });
});

function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    seconds %= 86400;

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Dashboard running on http://localhost:${PORT}`);
});