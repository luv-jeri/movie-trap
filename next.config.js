const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  env: {
    appName: 'Movie Trap',

    SERVER_URL:
      'http://localhost:8080/api/v1/',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable:
      process.env.NODE_ENV ===
      'development',
  },
  swcMinify: true,
});
