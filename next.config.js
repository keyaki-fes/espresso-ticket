const withPWA = require("next-pwa")({
  dest: "public",
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrinctMode: true,
  })
);
