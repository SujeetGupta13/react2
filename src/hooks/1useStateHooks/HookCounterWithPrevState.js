import React, { useState } from 'react';

const HookCounterWithPrevState = () => {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount( prevCount => prevCount + 1 )
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={ () => setCount( initialCount )}>Reset</button>
            <button onClick={ () => setCount( prevCount => prevCount + 1 )}>Increment by 1</button>
            <button onClick={ () => setCount( prevCount => prevCount - 1)}>Increment by 1</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    );
};

export default HookCounterWithPrevState;