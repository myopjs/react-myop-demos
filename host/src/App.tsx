import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyopContainer} from "@myop/react"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React + Myop</h1>

            <div className="center">
                <MyopContainer
                    componentId={'8c72d29b-c8a0-41cf-b08f-4acca96c7a16'}
                    flowId={'49283058-a787-4fa5-b0d2-516b2e6dc5e3'}
                />


            </div>

            <div className="center">
                <MyopContainer componentId={'728a22c5-8e82-4adf-8afa-e284c6b09a40'}
                               flowId={"505b0cc5-d90b-41e0-8fe8-bf8b307da2aa"}
                               onLikeClicked={()=>{
                                   alert('liked clicked')
                               }}

                />
            </div>

            <div className="card">

                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
