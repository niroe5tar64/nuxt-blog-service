module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['last 2 Chrome versions'],
            },
          },
        ],
      ],
      plugins: [
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
