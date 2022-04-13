import React from 'react';
import ReactDOM from 'react-dom'

//Container Component
class Counter extends React.Component {
    //initalize the state 
    state = {
        incValue: 10,
        decValue: 100
    };

    onIncrement = () => {
        this.setState((prvState) => {
            return { ...prvState, incValue: prvState.incValue + 1 }
        })
    }
    onDecrement = () => {
        this.setState(prvState => ({ ...prvState, decValue: prvState.decValue - 1 }))
    }
    render() {
        return <>
            {/* Here we pass state as prop,function as prop */}
            <CounterDisplay {...this.state}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement} />
        </>
    }

}
//presentational Component
const CounterDisplay = props => <><h1>Counter Application</h1>
    <h3>Increment Value : {props.incValue} - Decrement Value {props.decValue}</h3>
    <button onClick={props.onIncrement}>+</button>
    <button onClick={props.onDecrement}>-</button>
</>

const App = () => <div>
    <Counter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))

