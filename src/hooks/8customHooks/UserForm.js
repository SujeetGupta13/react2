import React, { useState } from 'react';
import useInput from './useInput';

const UserForm = () => {

    //const [firstName, SetFirstName] = useState('')
    //const [lastName, SetLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName}, ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* <input type="text" value={firstName} onChange={ e => SetFirstName(e.target.value)}></input> */}
                    <input {...bindFirstName} type="text" ></input>
                </div>
                <div>
                    <label>Last Name</label>
                    {/* <input type="text" value={lastName} onChange={ e => SetLastName(e.target.value)}></input> */}
                    <input {...bindLastName} type="text" ></input> {/* this is called spread operator */}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UserForm;