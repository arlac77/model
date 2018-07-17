import istanbul from 'rollup-plugin-istanbul';

import multiEntry from 'rollup-plugin-multi-entry';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'tests/simple-test.js',
  output: {
    file: 'build/test-bundle.js',
    format: 'cjs',
    sourcemap: true,
    interop: false
  },
  external: ['ava'],
  plugins: [babel({
    babelrc: false,
    presets: ['stage-3'],
    exclude: 'node_modules/**'
  }), multiEntry(), istanbul({
    exclude: ['tests/**/*-test.js']
  }), resolve(), commonjs()]
};
