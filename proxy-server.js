// proxy-server.js
// Simple proxy server for Anthropic API to bypass CORS
// Run with: node proxy-server.js

const http = require('http');
const https = require('https');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key, anthropic-version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/v1/messages') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const requestData = JSON.parse(body);
      const apiKey = req.headers['x-api-key'];

      // Forward to Anthropic API
      const options = {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        }
      };

      const anthropicReq = https.request(options, (anthropicRes) => {
        let responseData = '';

        anthropicRes.on('data', chunk => {
          responseData += chunk;
        });

        anthropicRes.on('end', () => {
          res.writeHead(anthropicRes.statusCode, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(responseData);
        });
      });

      anthropicReq.on('error', (error) => {
        console.error('Error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      });

      anthropicReq.write(JSON.stringify(requestData));
      anthropicReq.end();
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Proxy server running on http://localhost:${PORT}`);
  console.log(`📝 Update your HTML to use: http://localhost:${PORT}/v1/messages`);
});
