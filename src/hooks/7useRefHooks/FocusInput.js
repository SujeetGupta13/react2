import React, { useEffect, useRef } from 'react';

//this hooks makes possible to access the DOM nodes directlt in functional components.
//example: focusing on one input field(username field) as soon as login form loads in memory
//To do this we need to implement the componentDidMount behaviour in functionla component as we want to 
//focus only once when compoennt loads . and ComponentDidMount gets executed only once when component gets rendered.
const FocusInput = () => {

    const inputRef = useRef(null) // initial value of ref is null

    useEffect( () => {
        //focus the input element
        inputRef.current.focus()  // here React sets the curret property of refs to corresponding DOM node here <input> node
    }, []) //we are leaving arrya empty because we want to execute the arrow function only once
    return (
        <div>
            User Name:<input ref={inputRef} type="text"></input>
        </div>
    );
};

export default FocusInput;