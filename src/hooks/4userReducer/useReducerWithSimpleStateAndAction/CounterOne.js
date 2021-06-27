import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {  // here state is current state
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterOne = () => { 
    const [count, dispatch] = useReducer(reducer, initialState) // Here count is the current value of the state

    return (
        <div>
            <div>Simple State and Action::::Count - {count}</div>
            <button onClick={ () => dispatch('increment')}>Increment</button>
            <button onClick={ () => dispatch('decrement')}>Decrement</button>
            <button onClick={ () => dispatch('reset')}>Reset</button>
        </div>
    );
};

export default CounterOne;