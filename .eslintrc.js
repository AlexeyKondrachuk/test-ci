module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'files': ['**/*/*.test.js'],
      'plugins': ['jest'],
      'extends': ['plugin:jest/recommended'],
      'rules': { 'jest/prefer-expect-assertions': 'off' },
      'rules': {
        'jest/no-identical-title': 'off'
      }}
    
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {}
}
