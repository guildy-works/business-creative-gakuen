import withExportImages from 'next-export-optimize-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '',
    images: {
    },
    compiler: {
    },
    sassOptions: {

    },

};

export default withExportImages(nextConfig);
