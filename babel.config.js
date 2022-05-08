module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '~api': './src/api',
          '~assets': './src/assets',
          '~core': './src/core',
          '~helpers': './src/helpers',
          '~hooks': './src/hooks',
          '~mocks': './src/mocks',
          '~shared': './src/shared',
          '~stores': './src/stores',
          '~styles': './src/styles',
        },
      },
    ],
    [
      require.resolve('react-native-dotenv'),
      {
        moduleName: '~env',
        path: 'environments/.env',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
