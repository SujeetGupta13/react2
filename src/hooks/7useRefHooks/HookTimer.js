import React, { useEffect, useRef, useState } from 'react';

//Although useRef can hold a reference to DOM node using ref attribute.
//useRef can also be used to store the any mutable value. Value stored in useRef will persist through the re-renders and not causes any
//additional vendors any its value changes. 

//Aprt from the above example of useHooks. there are few more useHooks and those are useImperativeHandle,useLayoutEffect, useDebugValue

const HookTimer = () => {

    const [timer, setTimer] = useState(0)
    const interValRef = useRef()
    /*useEffect(() => {
        const interval = setInterval(() => {
            setTimer(preTimer => preTimer + 1)
        }, 1000)
        return () => { //Using this we can clear the interval from useEffect but not from handler. This is where UseRef comes for Rescue
            clearInterval(interval)
        };
    }, []) */
    useEffect(() => {
        interValRef.current = setInterval(() => {
            setTimer(preTimer => preTimer + 1)
        }, 1000)
        return () => { //Using this we can clear the interval from useEffect but not from handler. This is where UseRef comes for Rescue
            clearInterval(interValRef.current)
        };
    }, [])

    return (
        <div>
            Use Ref Example ::  Hook Timer - {timer}
            {/* <button onClick={() => clearInterval(interval)}>Clear Timer</button>Using this we can clear the interval from useEffect but not from handler */}
            <button onClick={() => clearInterval(interValRef.current)}>Clear Hook Timer</button>        
        </div>
    );
};

export default HookTimer;