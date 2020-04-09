const express = require('express');
const next = require('next');

(async () => {
  const app = next({ dev: process.env.NODE_ENV !== 'production' });
  const port = process.env.PORT || 3000;

  const handle = app.getRequestHandler();

  await app.prepare();
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}, now Next.js is starting`);
})();
