module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
};
