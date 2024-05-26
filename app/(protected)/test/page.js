export default function Page() {
    const wsUrl = "wss://5g.mxzn.top/wss"; // Replace with your actual WSS URL

    const ws = new WebSocket(wsUrl);

    ws.onopen = function() {
        console.log("WebSocket connection opened!");
    };

    ws.onmessage = function(event) {
        console.log("Received message from server:", event.data);
    };

    ws.onerror = function(error) {
        console.error("WebSocket error:", error);
    };
    return null
}
