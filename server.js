const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Nhận được: %s', message);
  });

  ws.send('Xin chào từ server!');
});
