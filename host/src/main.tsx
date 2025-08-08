import {StrictMode} from 'react'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//TODO : soon will be handled automatically by Myop SDK
// @ts-ignore
window['ReactDOMClient'] = ReactDOM;
// @ts-ignore
window['React'] = React;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
