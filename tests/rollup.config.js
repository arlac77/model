import babel from 'rollup-plugin-babel';

export default {
  input: 'tests/simple-test.js',
  output: {
    file: 'build/test-bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  external: ['ava'],
  plugins: [
    babel({
      babelrc: false,
      presets: ['stage-3'],
      exclude: 'node_modules/**'
    })
  ]
};