module.exports = function (api) {
  api.cache(true);
  const plugins = [
    'react-native-iconify/babel',
  ];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

    plugins,
  };
};
