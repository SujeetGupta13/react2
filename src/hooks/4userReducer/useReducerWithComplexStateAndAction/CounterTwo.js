import React, { useReducer } from 'react';

//Here wea re making State and Action both as an Object. So, this way State can manage mutiple value and Action acn contaion multi 
// value. This way we can use additional data in Action to handle Action in much better way in reducer.
//Here we are maintaining 2 varibales in state. And this is best suited in GLobal State mangement. 
//Here we are maintaining Local state, So, there is better way to maintain this. Discussed in next Multiple useReducer
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {  // here state is current state
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState) // Here count is the current value of the state

    return (
        <div>
            <div>Complex State and Action::::First Counter - {count.firstCounter}</div>
            <div>Complex State and Action::::Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default CounterTwo;