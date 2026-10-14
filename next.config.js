const basePath = "/TutoringPoE";
module.exports = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
