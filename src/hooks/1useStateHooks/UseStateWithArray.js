import React, { useState } from 'react';

const UseStateWithArray = () => {

    const [items, setItems] = useState([])

    //while working with Array, we use spread operator to append the array with new value.
    const addItem = () =>{
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <h1>Use State using An Array</h1>
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {items.map( item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseStateWithArray;