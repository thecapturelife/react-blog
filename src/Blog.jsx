import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogContext } from './App';
import { Container } from 'react-bootstrap';

const Blog = () => {
  const {id}=useParams()
  const {blog}=useContext(blogContext)
  const filterBlog=blog.find((item)=>item.id===parseInt(id))
  console.log(filterBlog);
  return (
    <div>
      <h2 className="border p-4 m-5  bg-success">Blog Content</h2>
        <Container className="border p-4 m-5  ">
        
        <h1>{filterBlog.title}</h1>
        <hr />
        <p>{filterBlog.blog}</p>
    </Container>
    </div>
  );
}

export default Blog;
