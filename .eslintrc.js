module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  settings: {
    'html/html-extensions': ['.html', '.mpx'] // consider .html and .mpx files as HTML
  },
  rules: {
    'space-before-function-paren': 0,
    'spaced-comment': 0
  },
  plugins: ['html'],
  globals: {
    wx: true,
    getApp: true,
    App: true,
    __mpx_mode__: true
  }
}
