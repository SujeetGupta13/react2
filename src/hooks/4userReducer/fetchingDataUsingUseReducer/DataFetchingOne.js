import axios from 'axios';
import React, { useEffect, useState } from 'react';

//This is done using setState hooks. same can be done using setReducer example DataFetchingTwo
const DataFetchingOne = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then( res => {
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch( error => {
            setLoading(false)
            setPost({})
            setError('Something went wrong!')
        })
    }, [])
    return (
        <div>
            <div>Data Fetching using useState and useEffect</div>
            {loading ? 'Laoding...' : post.title}
            {error ? error : null}
        </div>
    );
};

export default DataFetchingOne;