import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/app.ts',
    output: {
        file: 'build/app.js',
        format: 'cjs',
        sourcemap: true
    },
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    },
    plugins: [
        resolve({
            extensions: ['.js', '.ts'],
            modulesOnly: true
        }),
        typescript(),
        terser({
            ecma: 6
        })
    ],
    moduleContext: {
        [require.resolve('lodash')]: 'window'
    }
}
