import createNextIntPlugin from "next-intl/plugin";

const withNextIntl = createNextIntPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "prismic-assets-cdn.tomorrowland.com",
      "sonar.es",
      "api.time.com",
      "venga-store.com",
      "im8hoursahead.com",
      "www.vmcdn.ca"
    ]
  }
};

export default withNextIntl(nextConfig);
