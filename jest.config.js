module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.*\\.(vue)$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/app/$1',
    '^~~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  collectCoverageFrom: ['app/**/*.{js, vue}'],
};
