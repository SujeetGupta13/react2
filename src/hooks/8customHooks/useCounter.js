import { useState } from "react";

const useCounter = (initialCount = 0, value) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(preCount => preCount + value)
    }
    const decrement = () => {
        setCount(preCount => preCount - value)
    }
    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement,reset]
    //Here we are returning array of values instead of JSX. So,it shows that React component can retun array of value as well.
};

export default useCounter;