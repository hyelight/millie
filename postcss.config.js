const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ["./**/*.html", "./**/*.js"],
      css: ["**/*.css"],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        );
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        );
      },
    }),
  ],
};
