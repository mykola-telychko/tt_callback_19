import { WebSocketServer } from 'ws';

// Create a WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8080 });

// Connection event handler for new clients
wss.on('connection', function connection(ws) {
    console.log('New client connected');

    // Message event handler for receiving messages from clients
    ws.on('message', function incoming(message) {
        console.log('Received message:', message);

        // Echo back the received message to the client
        ws.send(`Server received: ${message}`);
    });

    // Close event handler for client disconnection
    ws.on('close', function close() {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
