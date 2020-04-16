import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

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
        uglify()
    ],
    moduleContext: {
        [require.resolve('lodash')]: 'window'
    }
}