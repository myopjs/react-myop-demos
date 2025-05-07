import App from './App.tsx'
import {expose} from "@myop/react-remote"

expose(<App/>, 'react-demo-component', async () => {
    const indexCss = (await import('./index.css?raw')).default;
    const appCss = (await import('./App.css?raw')).default;

    return {
        styles: [
            indexCss,
            appCss
        ]
    }
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
