const path = require('path');
const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
    disable: isProduction ? false : true,
  },
  images: {
    domains: ['raw.githubusercontent.com', 'res.cloudinary.com'],
  },
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@interfaces'] = path.join(__dirname, 'interfaces');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');

    return config;
  },
});
