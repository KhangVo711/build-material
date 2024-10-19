/** @type {import('next').NextConfig} */
const nextConfig = {

    // ADD...
    output: 'export',  // Chỉ định xuất tĩnh
    distDir: 'out',    // Thư mục xuất (mặc định là out)
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
