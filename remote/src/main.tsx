import App from './App.tsx'
import {expose} from "@myop/react-remote";
import { ReactDemo } from './components/ReactDemo.tsx';

expose(<App/>, 'react-demo-component', async () => {
    return {
        styles: [
            import('./index.css?raw'),
            import('./App.css?raw'),
        ]
    }
});


expose(<ReactDemo/>, 'react-demo', async () => {
    return {
        styles: [
            import('./components/ReactDemo.css?raw'),
        ]
    }
});

// createRoot(document.getElementById('root')!).render(
//     <ReactDemo/>
// )
