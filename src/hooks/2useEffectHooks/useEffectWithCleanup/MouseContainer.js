import React, { useState } from 'react';
import HookMouse from '../runEffectOnlyOnce/HookMouse';

//Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. 
//To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. 
//Above issue has been handled in calss component using componentWillUnmount function. But how to implement the same in functional component
// answers: The 1st method argument passed to useEffect function will also return a function which will get executed when component will unmount.
//in our case we will retun from useEffect method from HookMouse.js . check that file.

//So, to cleanup some activity(removing subscription, timers, eventHandler), make a function and return it from the function passed to useEffect method.

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>  MouseContainer with hookMouse::::
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display&& <HookMouse />}
        </div>
    );
};

export default MouseContainer;