import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
    });
  }, []);

  return (
   <div className="App">
    <h2>posts List</h2>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong><br />
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
   </div>
  );
}

export default App;