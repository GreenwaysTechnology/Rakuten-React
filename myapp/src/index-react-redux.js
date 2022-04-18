import { createStore } from "redux";
import React from 'react';
import ReactDOM from "react-dom"
import { Provider, useDispatch, useSelector } from 'react-redux'

//actions
const incrementAction = {
    type: 'counter/increment'
}

const counterReducer = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, counter: state.counter + 1 } //immuable object
        default:
            return state;
    }
}
//create Store Object 
const appStore = createStore(counterReducer);
/////////////////////////////////////////////////////////////////////////////////////

//React Component : ready to send request to redux
const Counter = props => {
    const value = useSelector(state => state.counter)
    const increment = useDispatch() // store.dispatch
    //listner
    const onIncrement = evt=>{
         //we need to send request to redux in order to get new State
        increment(incrementAction);
    }
    return <>
        <h2>Counter App</h2>
        <h3>Value : {value}</h3>
        <button onClick={onIncrement}>+</button>
    </>
}

const App = () => <div>
    <Provider store={appStore}>
        <h1>React - Redux Integration</h1>
        <Counter />
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'));