import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = bundleAnalyzer(
  {
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Match .svg files
        use: [
          {
            loader: '@svgr/webpack', // Use @svgr/webpack loader
            options: {
              svgo: true, // Enable SVG optimization
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false, // Preserve viewBox attribute
                  },
                ],
              },
            },
          },
        ],
      });

      return config;
    },
  },
);

export default nextConfig;
