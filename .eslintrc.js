module.exports = {
  // 設定ファイルを追加して設定を上書きするときに親階層をみていく。
  // このファイルよりも親階層を探しに行かないで欲しい時 true 設定
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  globals: {
    $nuxt: true
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'no-debugger' : 'off',

    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'asyncData',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS', 
        'RENDER_MODIFIERS',
        'GLOBAL', 
        'UNIQUE', 
        'TWO_WAY_BINDING', 
        'OTHER_DIRECTIVES', 
        'OTHER_ATTR', 
        'EVENTS', 
        'CONTENT'
      ]
    }],
  },
};
