/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    convertFormat: [
        ['png', 'webp'],
        ['jpg', 'webp'],
    ],
    // ファイルパスの問題を回避するための設定
    filenameGenerator: ({ path, name, width, quality, extension }) => {
        return `${name}.${extension}`;
    },
}

module.exports = config