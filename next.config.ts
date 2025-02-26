import withTM from 'next-transpile-modules';
import { webpack } from 'next/dist/compiled/webpack/webpack';
import Configuration = webpack.Configuration;

const withTranspileModules = withTM([
  'three',
  '@react-three/drei',
  '@react-three/fiber',
]);

const nextConfig = withTranspileModules({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config: Configuration) {
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: {
        loader: 'gltf-loader',
      },
    });

    return config;
  },
});

export default nextConfig;