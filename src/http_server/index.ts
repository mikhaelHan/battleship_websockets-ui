import fs from 'fs';
import path from 'path';
import http from 'http';
import WebSocket from 'ws';
import { handlers } from '../handlers/handlers';
import { v4 as uuid } from 'uuid';
import { clients } from '../data/data';

export const httpServer = http.createServer(function (req, res) {
  const __dirname = path.resolve(path.dirname(''));
  const file_path =
    __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
  fs.readFile(file_path, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);

    res.end(data);
  });
});

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
  const id = uuid();
  clients[id] = ws;
  console.log('New client connected');
  ws.on('message', async (message: string) => {
    try {
      const data = JSON.parse(message);
      await handlers(data, ws);
    } catch (error) {
      console.log(error);
    }
  });

  ws.on('close', () => {
    delete clients[id];
    console.log('Clien disconnected');
  });
});
