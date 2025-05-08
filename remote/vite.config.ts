import {defineConfig} from 'vite'
//import react from '@vitejs/plugin-react'
// @ts-ignore
import path from 'path';
import  {viteExternalsPlugin} from 'vite-plugin-externals'

// https://vite.dev/config/
export default defineConfig({
plugins: [
 // react()
    //@ts-ignore
    viteExternalsPlugin({
        react: 'React',
        'react-dom': 'ReactDOM',
        // // value support chain, transform to window['React']['lazy']
        // lazy: ['React', 'lazy']
    }),
],
//     resolve: {
//         dedupe: ['react', 'react-dom'], // 👈 Important!
//         //  alias: {
//         //    //@ts-ignore
//         //    react: path.resolve(__dirname, 'src/custom-react'),
//         // },
//     },
    build: {
        rollupOptions: {
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
            },
            //external: ['react', 'react-dom'], // avoid bundling to share instance
        },
    },
    server: {
        port: 4905,
        strictPort: true,
        cors: {
            origin: '*', // Allow requests only from this origin
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
            allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
            credentials: true, // Enable credentials if needed
        }
    }
})
