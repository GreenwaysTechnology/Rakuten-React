import React from 'react';
import ReactDOM from 'react-dom'

//state 
class Counter extends React.Component {
    //initalize the state 
    state = {
        incValue: 10,
        decValue: 100
    };

    //event listner
    onIncrement = () => {
        this.setState((prvState) => {
            console.log("old state => ", prvState)
            return { ...prvState, incValue: prvState.incValue + 1 }
        })
    }

    render() {
        console.log("Current State => ", this.state)
        return <>
            <h1>Counter Application</h1>
            <h3>Increment Value : {this.state.incValue} - Decrement Value {this.state.decValue}</h3>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={() => {
                this.setState(prvState => ({ ...prvState, decValue: prvState.decValue - 1 }))
            }}>-</button>

        </>
    }

}

const App = () => <div>
    <Counter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))

