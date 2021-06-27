import React, { useContext } from 'react';
import { CountContext } from './GlobalStateManagement';

const ComponentF = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick={ () => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={ () => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={ () => countContext.countDispatch('reset')}>Reset</button>
            ComponentF - {countContext.countState}
        </div>
    );
};

export default ComponentF;