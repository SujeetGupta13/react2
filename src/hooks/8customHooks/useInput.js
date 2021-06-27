import {useState} from 'react';

const useInput = (initialValue) => {

    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value, //ES6 way of define a property in JS object
        onChange: e => {
                setValue(e.target.value)
        }
    }
    return [value, bind, reset]
};

export default useInput;