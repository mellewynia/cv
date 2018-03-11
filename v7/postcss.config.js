
module.exports = {
  plugins: [
    require('postcss-partial-import')({}),
    require('postcss-media-minmax')({}),
    require('precss')({}),
    require('autoprefixer')({}),
  ],
};
