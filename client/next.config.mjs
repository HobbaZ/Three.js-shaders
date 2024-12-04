import withTM from "next-transpile-modules";

const withTMConfig = withTM([]); // Specify modules to transpile if needed

/** @type {import('next').NextConfig} */
const nextConfig = withTMConfig({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: "raw-loader", // Add loader for GLSL shaders
    });
    return config;
  },
});

export default nextConfig;
