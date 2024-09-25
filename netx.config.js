/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_JENTZ_PHARMA_OPENAI_API_KEY:
      process.env.NEXT_PUBLIC_JENTZ_PHARMA_OPENAI_API_KEY,
    NEXT_PUBLIC_JENTZ_API_URL: process.env.NEXT_PUBLIC_JENTZ_API_URL,
    NEXT_PUBLIC_JENTZ_S3_BUCKET: process.env.NEXT_PUBLIC_JENTZ_S3_BUCKET,
  },
  images: {
    domains: ["leaflets.s3.us-east-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
