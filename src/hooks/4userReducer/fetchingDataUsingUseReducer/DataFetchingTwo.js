import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went Wrong!!'
            }
        default:
            return state
    }
}
const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR'})
            })
    })
    return (
        <div>
            <div>Data Fetching using useReducer and useEffect</div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
};

export default DataFetchingTwo;