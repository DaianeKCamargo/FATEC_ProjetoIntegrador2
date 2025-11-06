import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/nome-do-seu-repositorio", // o nome exato do repositório no GitHub
  assetPrefix: "/nome-do-seu-repositorio/",
};

export default nextConfig;
