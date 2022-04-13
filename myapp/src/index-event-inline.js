import React from 'react';
import ReactDOM from 'react-dom'

//state 
class Counter extends React.Component {
    //initalize the state 
    state = {
        counter: 0
    };

    //event listner
    onIncrement = () => {
        this.setState((prvState) => {
            console.log("old state => ", prvState)
            return { ...prvState, counter: prvState.counter + 1 }
        })
    }

    render() {
        console.log("Current State => ", this.state)
        return <>
            <h1>Counter Application</h1>
            <h3>Counter : {this.state.counter}</h3>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={() => {
                this.setState(prvState => ({ ...prvState, counter: prvState.counter - 1 }))
            }}>-</button>

        </>
    }

}

const App = () => <div>
    <Counter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))

