import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = props => {
    let state = { value: 10 };
    const [counter, setCounter] = useState(state)

    const onIncrement = () => {
        setCounter(oldState => {
            console.log(oldState)
            return { ...oldState, value: oldState.value + 1 }
        })
    }

    return <div>
        <h1>Counter : {counter.value}</h1>
        <button onClick={onIncrement}>+</button>

    </div>
}


const App = props => <div>
    <h1>Functional Component</h1>
    <Counter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))