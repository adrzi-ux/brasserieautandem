const http = require('http');
const { exec } = require('child_process');
const crypto = require('crypto');

const PORT = 9876;
const SECRET = process.env.WEBHOOK_SECRET || 'brasserie-rebuild-2026';

const server = http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/rebuild') {
    res.writeHead(404);
    return res.end('Not found');
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const sig = req.headers['x-webhook-secret'];
    if (sig !== SECRET) {
      res.writeHead(401);
      return res.end('Unauthorized');
    }

    res.writeHead(200);
    res.end('Rebuild triggered');

    exec('/opt/rebuild-brasserie.sh', (err, stdout, stderr) => {
      if (err) console.error('Rebuild error:', err.message);
      else console.log('Rebuild OK:', new Date().toISOString());
    });
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Webhook server on port ${PORT}`);
});
