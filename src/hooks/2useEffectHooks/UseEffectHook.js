import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    }) //This hook function accepts a function which gets executed after every single component rendering.

    return (
        <div>
            Use Effects Hook:::<button onClick={ () => setCount(count+1)}>Clicked Hook{count} times</button>
        </div>
    );
};

export default UseEffectHook;