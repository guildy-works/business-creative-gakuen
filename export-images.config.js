/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
    basePath: '/tsunagaru-lab-new',
}

module.exports = config