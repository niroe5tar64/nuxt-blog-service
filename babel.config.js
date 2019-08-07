module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['last 2 Chrome versions'],
            },
          },
        ],
      ],
      plugins: [
        'transform-es2015-modules-commonjs',
        '@babel/plugin-proposal-class-properties',
        // [
        //   'component',
        //   {
        //     libraryName: 'element-ui',
        //     styleLibraryName: 'theme-chalk',
        //   },
        // ],
      ],
    },
  },
};
