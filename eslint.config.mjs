export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        __dirname: 'readonly', // Define __dirname
        require: 'readonly',   // Define require
        module: 'readonly'     // Define module
      }
    },
    env: {
      node: true, // Set the environment to Node.js
    },
    rules: {
      'no-unused-vars': 'error', // Rule to handle unused variables
      'no-undef': 'error',       // Rule to handle undefined variables
    }
  }
];
