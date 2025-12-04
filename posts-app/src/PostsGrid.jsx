import React, { useState, useEffect } from 'react';
import './PostsGrid.css';

const PostsGrid = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch('https://dummyjson.com/posts?limit=10'),
          fetch('https://dummyjson.com/users')
        ]);
        
        const postsData = await postsRes.json();
        const usersData = await usersRes.json();
        
        const usersMap = usersData.users.reduce((acc, user) => {
          acc[user.id] = { firstName: user.firstName, lastName: user.lastName };
          return acc;
        }, {});
        
        setPosts(postsData.posts);
        setUsers(usersMap);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="author">
              {users[post.userId]?.firstName} {users[post.userId]?.lastName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsGrid;