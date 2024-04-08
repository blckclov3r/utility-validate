import {defineConfig} from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm', 'iife'],
    entry: ['./src/index.ts'],
    clean: true,
    minify: 'terser',
    keepNames: true,
    treeshake: false,
    target: 'es5',
    outDir: './dist',
    name: 'utility-library',
    dts: true,
    splitting: false,
    terserOptions: {
        mangle: true,
        compress: true,
        ecma: 5,
        keep_fnames: true,
        module: true,
        safari10: true,
        ie8: true,
        toplevel: true,
    },
});
