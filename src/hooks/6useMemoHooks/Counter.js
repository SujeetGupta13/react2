import React, { useMemo, useState } from 'react';


// beacsue of loop in isEven, incrementOne operation is slow and incrementTwo as well(even if we are not clicking on incremntTwo),
//because everytime due to update component is gettin re-rendered. So, we need a way to tell React that to not re-calculate certain 
//value when unneccessary.specially that takes a long time to compute. that's where useMemo comes into picture.
//useMemo will recompute the cached value when of the dependency has changed. This optimization helps us to avoid expensive calculation on
//every render. useMemo retuns the cache value..

//usecalback and useMemo both used for optimization. usecallback caches the provided function instance itself whereas useMemo invokes theprovded
//fuction and cache the results. if need to cache fuction use useCallback, and whwn need to cache the result of invoked function , the use useMemo.
const Counter = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const   incrementOne = () =>{
        setCounterOne( counterOne + 1)
    }
    const   incrementTwo = () =>{
        setCounterTwo( counterTwo + 1)
    }
    // const isEven = () => {
    //     let i = 0;
    //     while( i < 200000000) i++
    //     return counterOne % 2 === 0
    // }
    const isEven = useMemo( () => {
        let i=0;
        while( i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    
    return (
        <div>
            <div>
              <button onClick={incrementOne}>Count one  - {counterOne}</button>
              {/* <span>{isEven() ? 'Even': 'Odd'}</span> */}
              <span>{isEven ? 'Even': 'Odd'}</span>
            </div>
            <div>
              <button onClick={incrementTwo}>Count two  - {counterTwo}</button>
            </div>
        </div>
    );
};

export default Counter;
