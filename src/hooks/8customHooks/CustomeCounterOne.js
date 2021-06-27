import React, { useState } from 'react';
import useCounter from './useCounter';

const CustomeCounterOne = () => {

    /*const [count, setCount] = useState(0)

    const increment = () => {
        setCount(preCount => preCount + 1)
    }
    const decrement = () => {
        setCount(preCount => preCount - 1)
    }
    const reset = () => {
        setCount(0)
    }*/

    const [count, increment, decrement,reset] = useCounter(2, 10)
    return (
        <div>
            <h2>Custom  Count one = {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
        </div>
    );
};

export default CustomeCounterOne;