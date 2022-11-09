import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(error => console.log(error))  
  },[id]) // [] <- dependency list
  return (
    <div>
      <input type='text' value={id} onChange={e => setId(e.target.value)}/>
      <div>{post.title}</div>
      {/* <ol>
        {posts.map(post => (<li key={post.id}>{post.title}</li>))}
      </ol> */}
    </div>
  )
}

export default DataFetching