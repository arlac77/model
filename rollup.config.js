import { name, description, version, config } from "./package.json";

import consts from "rollup-plugin-consts";
import copy from "rollup-plugin-copy";
import dev from "rollup-plugin-dev";
import { terser } from "rollup-plugin-terser";

import svelte from "rollup-plugin-svelte";
import builtins from "builtin-modules";
import json from "rollup-plugin-json";
import cleanup from 'rollup-plugin-cleanup';
import executable from 'rollup-plugin-executable';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  plugins: [consts({
    name,
    version,
    description,
    ...config
  }), copy({
    targets: [{ src: "node_modules/mf-styling/global.css", dest: dist }]
  }), svelte({
    dev: !production,
    css: css => {
      css.write(`${dist}/bundle.css`);
    }
  }), resolve({ browser: true }), commonjs(), dev({
    port,
    dirs: [dist],
    spa: `${dist}/index.html`,
    basePath: config.base,
    proxy: { [`${config.api}/*`]: [config.proxyTarget, { https: true }] }
  })],
  input: pkg.module,

  output: {
    format: 'cjs',
    file: pkg.main,
    sourcemap: true
  }
};
