import axios from 'axios';
import React, { useEffect, useState } from 'react';

//In future called suspense will be used for data fetching. Data fecthing can also be done using useState and useEffect hooks
const DataFetching = () => {

    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtobClick, setIdFromButtobClick] = useState(1)

    /*useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts') //get request returns a promise
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []) *///If we don't specify the empty array, here then egt request will be done infinite time. becase useEffect runs based on the 2nd 
    //parameter to useEffect function. 2nd argument is basically a condition. which is true at the time of compoennt load

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //get request returns a promise
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => {
                console.log(error)
            })
        // }, [id])
    }, [idFromButtobClick])

    const handleClick = () => {
        setIdFromButtobClick(id)
    }
    return (
        <div>
            Data Fetching using UseEffects:::<input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    );
};

export default DataFetching;