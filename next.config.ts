import withTM from 'next-transpile-modules';

const withTranspileModules = withTM([
  'three',
  '@react-three/drei',
  '@react-three/fiber',
]);

const nextConfig = withTranspileModules({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
});

export default nextConfig;