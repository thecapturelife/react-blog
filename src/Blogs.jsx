import React, { useContext } from 'react';
import { blogContext } from './App';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const{blog}=useContext(blogContext)
  console.log(blog);
  return (
    <div>
      <h1>Blogs</h1>
      <h2 className="border p-4 m-5 bg-secondary ">Blogs Titles</h2>
      {blog.map((item) => {
        return (
          <Container className="border p-4 m-5  ">
           
            <div key={item.id} className="title">
              <Link to={`/blog/${item.id}`}>
                <h4>{item.title}</h4>
              </Link>
            </div>
          </Container>
        );
      })}
    </div>
  );
}

export default Blogs;
