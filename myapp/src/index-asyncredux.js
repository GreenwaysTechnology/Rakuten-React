import { applyMiddleware, combineReducers, createStore } from "redux";
import React, { useState,useEffect } from 'react';
import ReactDOM from "react-dom"
import { Provider, useDispatch, useSelector } from 'react-redux'
import thunk from 'redux-thunk'

//action constants
const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const INCREMENTBYAMOUNT = 'counter/incrementByAmt'

//actions
const incrementAction = {
    type: INCREMENT
}
const decrementAction = {
    type: DECREMENT
}

//action creator : function which returns action object
// function incrementByAmountAction(payload) {
//     return {
//         type: INCREMENTBYAMOUNT,
//         payload
//     }
// }
const incrementByAmountAction = payload => ({
    type: INCREMENTBYAMOUNT,
    payload
})
const incrementReducer = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 } //immuable object
        default:
            return state;
    }
}
const incrementByAmount = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case INCREMENTBYAMOUNT:
            return { ...state, counter: state.counter + action.payload } //immuable object
        default:
            return state;
    }
}
const decrementReducer = (state = { counter: 100 }, action) => {
    switch (action.type) {
        case DECREMENT:
            return { ...state, counter: state.counter - 1 } //immuable object
        default:
            return state;
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'todos':
            return state.concat(action.payload)
        default:
            return state;
    }
}
//composition api to compose multiple reducers into one.
const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer,
    incrementByAmt: incrementByAmount,
    todos:todosReducer
})

//custom middlewares
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}


//todo action creator
function todocreator(todos) {
    return {
        type: 'todos',
        payload: todos
    }
}
//ajax logic
function todosAsync() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => {
            res.json().then(todos => {
                dispatch(todocreator(todos));
            });
        })
    }
}

//create Store Object 
const appStore = createStore(rootReducer, applyMiddleware(logger,thunk));


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
const IncrementByAmount = props => {
    const [text, setText] = useState(0);
    //appstate.reducer.state
    const value = useSelector(state => state.incrementByAmt.counter) //state
    const increment = useDispatch() // store.dispatch
    //listner
    const onIncrement = evt => {
        //we need to send request to redux in order to get new State
        increment(incrementByAmountAction(parseFloat(text)));
    }
    const onUpdate = evt => {
        setText(evt.target.value)
    }
    return <>
        <h2>InCrementByAmount Screen</h2>
        <h3>Value : {value}</h3>
        <input onChange={onUpdate} />
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

//todos component which gets data via redux
const Todos = props => {
    const todos = useSelector(state => state.todos);
    const getTodos = useDispatch();
    useEffect(() => {
        getTodos(todosAsync())
    }, [])
    return <div>
        <h1>Todos App</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>
                <span>{todo.title}</span>
            </li>)}
        </ul>
    </div>
}


const App = () => <div>
    <Provider store={appStore}>
        <h1>React - Redux Integration</h1>
        <Increment />
        <IncrementByAmount />
        <Decrement />
        <Todos/>
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'));