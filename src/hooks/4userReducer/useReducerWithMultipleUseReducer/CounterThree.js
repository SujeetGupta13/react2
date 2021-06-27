import React, { useReducer } from 'react';

//If We have to maintain 2 state with exact same state transition of one initila value var, then go for Multiple useReducer
//This avoids us duplicating code in Reducer fucntion.
const initialState = 0;
const reducer = (state, action) => {  // here state is current state
    switch (action) {
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

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState) // Here count is the current value of the state
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Multiple useReducer::::Counter1 - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <div>Multiple useReducer::::Counter2 - {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    );
};

export default CounterThree;