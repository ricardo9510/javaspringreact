import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Dinners</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Carga Dinners
            </p>
            <p>
                BeanStalc
            </p>


        </>
    )
}

export default App
