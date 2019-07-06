module.exports = {
  // 設定ファイルを追加して設定を上書きするときに親階層をみていく。
  // このファイルよりも親階層を探しに行かないで欲しい時 true 設定
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  globals: {
    $nuxt: true
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error'
  },
};
