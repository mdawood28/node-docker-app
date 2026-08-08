const statusElement = document.getElementById("status");
const nodeVersionElement = document.getElementById("nodeVersion");
const uptimeElement = document.getElementById("uptime");
const cpuCoresElement = document.getElementById("cpuCores");
const memoryElement = document.getElementById("memory");

const hostnameElement = document.getElementById("hostname");
const platformElement = document.getElementById("platform");
const architectureElement = document.getElementById("architecture");
const environmentElement = document.getElementById("environment");

const refreshButton = document.getElementById("refreshButton");
const lastUpdatedElement = document.getElementById("lastUpdated");


async function loadStatus() {

    refreshButton.disabled = true;
    refreshButton.textContent = "↻ Refreshing...";

    try {

        const response = await fetch("/api/status");

        if (!response.ok) {
            throw new Error("Unable to fetch server status");
        }

        const data = await response.json();


        // Status
        statusElement.textContent = data.status;


        // Main statistics
        nodeVersionElement.textContent = data.nodeVersion;
        uptimeElement.textContent = data.uptime;
        cpuCoresElement.textContent = data.cpuCores;
        memoryElement.textContent = data.memory;


        // Server details
        hostnameElement.textContent = data.hostname;
        platformElement.textContent = data.platform;
        architectureElement.textContent = data.architecture;
        environmentElement.textContent = data.environment;


        // Last updated
        const updateTime = new Date(data.timestamp);

        lastUpdatedElement.textContent =
            `Last updated: ${updateTime.toLocaleTimeString()}`;

    } catch (error) {

        console.error(error);

        statusElement.textContent = "Offline";

        statusElement.style.color = "#ef4444";

    } finally {

        refreshButton.disabled = false;
        refreshButton.textContent = "↻ Refresh Status";

    }
}


// Load information when page opens
loadStatus();


// Automatically refresh every 30 seconds
setInterval(loadStatus, 30000);