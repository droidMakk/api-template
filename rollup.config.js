import sucrase from 'rollup-plugin-sucrase';
import resolve from 'rollup-plugin-node-resolve';

export default [
    {
        input: 'src/app.ts',
        output: {
            file: 'build/app.js',
            format: 'cjs',
            compact: true,
        },
        watch: {
            include: 'src/**',
            exclude: 'node_modules/**'
        },
        plugins: [
            resolve({ extensions: ['.js', '.ts'], modulesOnly: true }),
            sucrase({
                exclude: ['node_modules/**'],
                transforms: ['typescript'],
                enableLegacyBabel5ModuleInterop: true
            })
        ]
    }
]