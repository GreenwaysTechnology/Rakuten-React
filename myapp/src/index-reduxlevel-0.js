import { createStore } from "redux";

//reducer - biz logic which is pure function 
const counterReducer = (state = { counter: 0 }, action) => {
//    console.log("Old State /Previous State  =>",state,action)
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            console.log("Old State /Previous State  =>",state,action)
            return { ...state, counter: state.counter + 1 } //immuable object
        default:
            return state;
    }
}

//create Store Object 
const store = createStore(counterReducer);

//bind event listner for store updates, incase any biz logic gets executed.
store.subscribe(()=>{
    console.log("Current State => ",store.getState())
})

//send an action -  send request--- in order to compute new state.
const increment = {
    type:'counter/increment'
}
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)