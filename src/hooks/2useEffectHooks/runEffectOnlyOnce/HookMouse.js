import React, { useEffect, useState } from 'react';

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

const logMousePosition = (e) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
}
    useEffect( () => {
        console.log('useFffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component Unmounting Code called')
        window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) //here [] arrya tells react that it is not deopendent on any condition. 
        //So, don't call everytime when compoents gets re-rendered .call only once while 1st time rndering
    return (
        <div> Add mouse event listen only Once using class::::
            X - {x} Y - {y}
        </div>
    );
};

export default HookMouse;