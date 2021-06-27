import React, { useEffect, useState } from 'react';

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        console.log(`tick: ${count}`)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count]) //Here If we don't specify dependency then tick methid will be executed and count will be incremented
                //after every 1 second but component will not be re-rendered. Watch Video more time once you get good knowledge of React.
    return (
        <h1>
            IntervalHookCounter::::{count}
        </h1>
    );
};

export default IntervalHookCounter;