/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/',
      },
    ],
  },
}

export default nextConfig
