

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static export
  basePath: isProd ? '/TravelNest' : '',
  assetPrefix: isProd ? '/TravelNest/' : '',
};

export default nextConfig;
