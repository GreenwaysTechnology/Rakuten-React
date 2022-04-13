import React from 'react';
import ReactDOM from 'react-dom'

//state 
class Counter extends React.Component {
    //initalize the state 
    state = {
        //here your component specific data
        counter: 0  //initalize state //
    };

    //event listner
    onIncrement = () => {
        // this.state.counter = this.state.counter + 1
        // console.log("Inside Listener => ", this.state.counter);
        // //trigger setState method
        // this.setState(function (prvState) {
        //     console.log("old state => ", prvState)
        //     // return {
        //     //     counter: prvState.counter + 1
        //     // }
        //     // return Object.assign({}, prvState, { counter: prvState.counter + 1 })
        //     return { ...prvState, counter: prvState.counter + 1 }
        // })
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
        </>
    }

}

const App = () => <div>
    <Counter />
</div>

ReactDOM.render(<App />, document.getElementById('root'))

