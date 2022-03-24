import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
// import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup/plugin-dts";

export default [
  {
    input: "./src/index.tsx",
    output: [
      { file: "dist/index.js", format: "cjs", sourcemap: true },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        babelHelpers: "bundled",
      }),
      external(),
      resolve(),
      terser(),
      // commonjs(),
      typescript(),
      // dts(),
    ],
  },
];
