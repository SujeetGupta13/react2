import React, { useState } from 'react';
import useCounter from './useCounter';

const CustomeCounterTwo = () => {

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

    const [count, increment, decrement,reset] = useCounter(10, 5)
    return (
        <div>
            <h2>Custom  Count two = {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
        </div>
    );
};

export default CustomeCounterTwo;