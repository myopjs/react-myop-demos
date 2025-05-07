import App from './App.tsx'
import {expose} from "@myop/react-remote"

expose(<App/>, 'react-demo-component', async () => {
    return {
        styles: [
            import('./index.css?raw'),
            import('./App.css?raw'),
        ]
    }
});

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
