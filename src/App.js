import { createContext, useState } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import Blog from './Blog';

export const blogContext = createContext();

function App() {
 const [blog , setBlog] = useState([]);
  return (
    <div className="App">
     <blogContext.Provider value={{blog , setBlog}}>
    <Routes>

      <Route path='/' element ={<CreateBlog/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>

    </Routes>
    </blogContext.Provider>
    
    </div>
  );
}

export default App;
