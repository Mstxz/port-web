// server/server.js
import express from 'express';
import ViteExpress from 'vite-express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));

// Example API route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Use ViteExpress to handle both frontend serving and backend listening
ViteExpress.listen(app, 3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
