import App from './App.tsx'
import {expose} from "@myop/react-remote";
import {ReactDemo} from './components/ReactDemo.tsx';

expose(<App/>, 'react-demo-component', async () => {
    return {
        styles: [
            import('./index.css?raw'),
            import('./App.css?raw'),
        ]
    }
});

expose(<ReactDemo/>, 'react-demo', async () => {

    //TODO :

    const {url} = import.meta;
    const parts = url.split('/')
    parts.pop();   //drop current file
    parts.pop(); //drop /src
    const urlPath = parts.join('/') || '/';

    // document.head.append(
    //     Object.assign(document.createElement("link"), {
    //         rel: "stylesheet",
    //         href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.0/css/all.min.css'
    //     }));


    const style = `
        @font-face {
            font-family: 'priego';  /* Name you want to use for the font */
            src: url('${urlPath}/priego-regular.otf') format('opentype'); /* Path to the OTF file */
            font-weight: normal;
            font-style: normal;
            font-display: block; /* Hide text until the font is loaded */
        }  
 `

    document.head.append(
        Object.assign(document.createElement("style"), {
            textContent: style
        })
    );

    return {
        styles: [
            import('./components/ReactDemo.css?raw'),
        ]
    }
});

// createRoot(document.getElementById('root')!).render(
//     <ReactDemo/>
// )
