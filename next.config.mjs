/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://nabanna-backend.onrender.com", // Replace with the hostname of your image server

        pathname: "/ItReq/**", // specify a path pattern
      },
    
      {
        protocol: "https",
        hostname: "https://nabanna-backend.onrender.com",

        pathname: "/EstimateFolder/**",
      },
     
      {
        protocol: "https",
        hostname: "https://nabanna-backend.onrender.com",

        pathname: "/RequisitionFolder/**",
      },
      
      {
        protocol: "https",
        hostname: "https://nabanna-backend.onrender.com",

        pathname: "/ApprovalFolder/**",
      },
      
      
      {
        protocol: "https",
        hostname: "https://nabanna-backend.onrender.com",

        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
