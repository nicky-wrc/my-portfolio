import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Store generated output in the production directory already ignored by Git.
  distDir: "build",
  reactCompiler: true,
};

export default nextConfig;
