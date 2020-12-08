module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: { // mocha 全局变量
    describe: 'readonly',
    it: 'readonly'
  },
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'never']
  }
};
