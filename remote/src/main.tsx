import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {expose} from "@myop/react-remote"


expose(<App/>, 'react-demo-component', async () => {

    debugger;

    const indexcss = (await import('./index.css?raw')).default;
    const appcss = (await import('./App.css?raw')).default;

    return {
        styles: [
            indexcss,
            appcss
        ]
    }
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
