const path = require('path');

process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || 8080;

const nextServer = require('./server');

console.log(`> Server starting on port ${process.env.PORT}`);

nextServer.listen(process.env.PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`> Server started successfully on port ${process.env.PORT}`);
});
