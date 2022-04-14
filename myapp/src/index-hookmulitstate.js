import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = props => {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState(100)
    
    const onIncrement = () => {
        setValue1(value1 + 1);
    }
    const onDecrement = () => {
        setValue2(value1 - 1);
    }
    return <div>
        <h1>Counter : {value1} {value2}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>

    </div>
}


const App = props => <div>
    <h1>Functional Component</h1>
    <Counter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))