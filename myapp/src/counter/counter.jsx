import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = props => {
    const value = useSelector(state => state.counter.value)
    const increment = useDispatch() // store.dispatch
    //listner
    const onIncrement = evt => {
        increment({ type: 'counter/increment' });
    }
    useEffect(()=>{
        console.log('counter init')
        //componentwillUnMount
        return function(){
            console.log('counter destroyed')
        }
    },[])
    return <>
        <h2>Counter App</h2>
        <h3>Value : {value}</h3>
        <button onClick={onIncrement}>+</button>
    </>
}
export { Counter };