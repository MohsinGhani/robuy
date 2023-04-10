// const { default: images } = require("./public/assets/images");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    basePath: '/blog',
    async rewrites() {
      return [
        {
          source: '/blog',
          destination: '/',
        },
      ]
    },
  };
  return nextConfig;
};
