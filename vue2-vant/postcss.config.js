module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 / 2 : 75;
      },
      propList: ['*'],
    },
  },
};
