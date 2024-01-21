import React, { useContext, useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blogContext } from './App';
import './Create.css'

const CreateBlog = () => {
   const {blog,setBlog} = useContext(blogContext)

  const titleRef=useRef(null);
  const  blogRef=useRef(null)
  
  const handleSave=()=>{
      const inputTitleRef=titleRef.current.value;
      const inputBlogRef=blogRef.current.value;
      const value={id:Date.now(),title:inputTitleRef,blog:inputBlogRef}
      setBlog([...blog,value])
  }
  return (
    <div className='blog-container'>
        <Container className="border p-4 m-5  "><br /><br />
        <h1>Create Blog</h1><hr /><br />
        <textarea
          placeholder="Write..titile..."
          ref={titleRef}
          rows={2}
          cols={50}
        />
        <br />
        <br />
        <textarea
          placeholder="Write..body..."
          ref={blogRef}
          rows={10}
          cols={80}
        />
        <br />
        <br />

        <Link to="/blogs">
          <Button className="bg-success" onClick={handleSave}>
            Save
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default CreateBlog;
