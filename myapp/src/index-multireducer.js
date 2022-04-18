import { combineReducers, createStore } from "redux";
import React from 'react';
import ReactDOM from "react-dom"
import { Provider, useDispatch, useSelector } from 'react-redux'

//actions
const incrementAction = {
    type: 'counter/increment'
}
const decrementAction = {
    type: 'counter/decrement'
}

const incrementReducer = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...state, counter: state.counter + 1 } //immuable object
        default:
            return state;
    }
}
const decrementReducer = (state = { counter: 100 }, action) => {
    switch (action.type) {
        case 'counter/decrement':
            return { ...state, counter: state.counter - 1 } //immuable object
        default:
            return state;
    }
}

//composition api to compose multiple reducers into one.
const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})

//create Store Object 
const appStore = createStore(rootReducer);


/////////////////////////////////////////////////////////////////////////////////////

//React Component : ready to send request to redux
const Increment = props => {
     //appstate.reducer.state
    const value = useSelector(state => state.increment.counter) //state
    const increment = useDispatch() // store.dispatch
    //listner
    const onIncrement = evt => {
        //we need to send request to redux in order to get new State
        increment(incrementAction);
    }
    return <>
        <h2>InCrement Screen</h2>
        <h3>Value : {value}</h3>
        <button onClick={onIncrement}>+</button>
    </>
}
const Decrement = props => {
    //appstate.reducer.state
    const value = useSelector(state => state.decrement.counter) 
    const decrement = useDispatch() // store.dispatch
    //listner
    const onDecrement = evt => {
        //we need to send request to redux in order to get new State
        decrement(decrementAction);
    }
    return <>
        <h2>Decrement Screen</h2>
        <h3>Value : {value}</h3>
        <button onClick={onDecrement}>-</button>
    </>
}

const App = () => <div>
    <Provider store={appStore}>
        <h1>React - Redux Integration</h1>
        <Increment />
        <Decrement />
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'));