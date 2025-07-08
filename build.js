const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/ts/onload.ts'],
    bundle: true,
    outfile: 'src/js/onload.js',
    format: 'iife',
    target: 'es2020',
    sourcemap: true,
    minify: true,
    platform: 'browser',
    loader: {
        '.ts': 'ts'
    }
}).catch(() => process.exit(1));