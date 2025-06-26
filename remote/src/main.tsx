import {appendStyleToHost, expose, resolveRelativeToModule} from "@myop/react-remote";
import {DemoComponent} from './components/DemoComponent/DemoComponent.tsx';
import {DemoComponent2} from "./components/DemoComponent2/DemoComponent2.tsx";

const appendCustomFontFace = ()=>{
    const style = `
        @font-face {
            font-family: 'priego';  /* Name you want to use for the font */
            src: url('${resolveRelativeToModule('priego-regular.otf', 1)}') format('opentype'); /* Path to the OTF file */
            font-weight: normal;
            font-style: normal;
            font-display: block; /* Hide text until the font is loaded */
        }`;

    appendStyleToHost(style);
};

expose(DemoComponent, 'react-demo', async () => {
    appendCustomFontFace();
    return {
        styles: [
            import('./components/DemoComponent/DemoComponent.css?raw'),
        ]
    }
}).then();

expose(DemoComponent2, 'react-demo2', async () => {
    appendCustomFontFace();
    return {
        styles: [
            import('./components/DemoComponent2/DemoComponent2.css?raw'),
        ]
    }
}).then();

