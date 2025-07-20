import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/tsunagaru-lab-new',
    images: {
    },
    compiler: {
    },
    sassOptions: {

    },

};

<<<<<<< HEAD
// CI環境では画像最適化プラグインを無効化
const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';

let config;
if (isCI) {
    nextConfig.images.unoptimized = true;
    config = nextConfig;
} else {
    config = withExportImages(nextConfig);
}

export default config;
=======
export default (nextConfig);
>>>>>>> 15f08e80f6dfa0151f57644869c3535c6b80d108
