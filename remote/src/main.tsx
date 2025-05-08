import {appendStyleToHost, expose, resolveRelativeToModule} from "@myop/react-remote";
import {DemoComponent} from './components/DemoComponent/DemoComponent.tsx';

expose(DemoComponent, 'react-demo', async () => {

    const style = `
        @font-face {
            font-family: 'priego';  /* Name you want to use for the font */
            src: url('${resolveRelativeToModule('priego-regular.otf', 1)}') format('opentype'); /* Path to the OTF file */
            font-weight: normal;
            font-style: normal;
            font-display: block; /* Hide text until the font is loaded */
        }`;

    appendStyleToHost(style);

    return {
        styles: [
            import('./components/DemoComponent/DemoComponent.css?raw'),
        ]
    }
}).then();

// createRoot(document.getElementById('root')!).render(
//     <ReactDemo/>
// )
