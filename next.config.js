/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/portfolio',
            destination: '/',
            permanent: true,
          },
        ]
      },
};

module.exports = nextConfig;
