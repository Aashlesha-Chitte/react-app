module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-optional-chaining',
    '@babel/proposal-nullish-coalescing-operator',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-runtime',
        'dynamic-import-node',
      ],
    },
  },
};
