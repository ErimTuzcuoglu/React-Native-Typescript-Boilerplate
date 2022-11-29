module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@infrastructure': './src/infrastructure',
          '@navigation': './src/navigation',
          '@network': './src/network',
          '@other': './src/other',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@value': './src/value'
        },
      },
    ],
    'react-native-reanimated/plugin',
  ]
};
