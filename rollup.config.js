import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

// rollup.config.js
export default {
  input: 'src/static-site/js/index.js',
  output: {
    file: 'src/static-site/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
