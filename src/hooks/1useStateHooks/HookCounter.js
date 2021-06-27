import React, {useState} from 'react';

function HookCounter(props) {

    //useState is react hook that let's use react feature like state in functional component.
    const [count, setCount] = useState(0); //useState fucntion returns state variable with default initial value 0 and a function to change the state variable.
                                           //these two things has been assigned to an array, this is called Array destructuring, ES6 feature. 
    return (
        <div>
            <button onClick={ () => setCount(count+1)}>Count is : {count}</button>
        </div>
    );
}

export default HookCounter;