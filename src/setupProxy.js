
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://parsers-test.useid.pro/',
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
