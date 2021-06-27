import React, { useState } from 'react';

const UseStateWithObject = () => {
    const [name, setName] = useState({ firstName: '', lastName: ''})

    return (
        <form>
        {/*First Name: <input type="text" value={name.firstName} onChange={ e => setName({firstName:e.target.value})} />*/} {/*Setter function provided by useState hooks does not automatically update and merge Object. you have to merge manually by using Spread Operator(ES6 feature) and then pass to setter function*/}
        First Name: <input type="text" value={name.firstName} onChange={ e => setName({ ...name, firstName:e.target.value})} /> {/*Here ...name will tell react that first copy the every properties of name and the just override the firstname properties */}
        Last Name: <input type="text" value={name.lastName} onChange={ e => setName({ ...name, lastName:e.target.value})} />
        <h2>Your first name is -{name.firstName}</h2>
        <h2>Your last  name is -{name.lastName}</h2>
        <h2>Your name is -{JSON.stringify(name)}</h2>
        </form>
    );
};

export default UseStateWithObject;
