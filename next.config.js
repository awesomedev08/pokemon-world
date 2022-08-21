const withPWA = require('next-pwa');
const runtimeCaching = require('./next-pwa.cache');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
        },
      ],
    },
  },
  async redirects() {
    return [
      {
        source: '/statistics',
        destination: '/statistics/types',
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
});
