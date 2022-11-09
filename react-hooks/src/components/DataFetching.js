import React, {useState, useEffect} from 'react'

function DataFetching() {
  const [posts, setPosts] = useState([])
  return (
    <div>
      <ol>
        posts.map(post => (<li key={post.id}>{post.title}</li>))
      </ol>
    </div>
  )
}

export default DataFetching