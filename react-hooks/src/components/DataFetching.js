import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(error => console.log(error))  
  },[])
  return (
    <div>
      <ol>
        {posts.map(post => (<li key={post.id}>{post.title}</li>))}
      </ol>
    </div>
  )
}

export default DataFetching