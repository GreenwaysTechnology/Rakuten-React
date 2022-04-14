import React, { useState } from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    state = {
        value: 0
    }
    onIncrement = evt => {
        this.setState(prevState => ({ ...prevState, value: prevState.value + 1 }))
    }
    render() {
        return <div>
            <h1>Value : {this.state.value}</h1>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}

const MyCounter = props => {
    //hook 
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        //state update
        // setCounter(oldCounter => {
        //     return oldCounter + 1
        // });
        setCounter(counter + 1);
    }

    return <div>
        <h1>Counter : {counter}</h1>
        <button onClick={onIncrement}>+</button>

    </div>
}


const App = props => <div>
    <h1>Class Component</h1>
    <Counter />
    <hr />
    <h1>Functonal Component-Hook</h1>
    <MyCounter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))