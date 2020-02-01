module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier', 'prettier/vue'],
  // add your custom rules here
  rules: {
    'no-console': 'off'
  }
}
