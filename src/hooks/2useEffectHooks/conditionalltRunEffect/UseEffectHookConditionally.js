import React, { useEffect, useState } from 'react';

const UseEffectHookConditionally = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `you clicked ${count} times`
        console.log('Updating document title')
    }, [count,name]) //This hook function accepts a function which gets executed after every single component rendering.
                //here 2nd arg of useEffect is an Array, in this array we pass the props or state. if these value changes then only 1st agru gets executed

    return (
        <div>
            <h1>UseEffectHookConditionally</h1>
            <input type="text" value={name} onChange={e => {setName(e.target.value)   }}></input>
            Use Effects Hook:::<button onClick={() => setCount(count + 1)}>Clicked Hook{count} times</button>
        </div>
    );
};

export default UseEffectHookConditionally;