import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmars ,handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=> {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="px-4 md:w-2/3 md:px-0">
      <h2 className="text-2xl font-bold ">Blogs: {blogs.length}</h2>

      {
        blogs.map(blog => <Blog
           blog={blog}
           handleBookmars = {handleBookmars}
           handleMarkAsRead = {handleMarkAsRead}
           ></Blog>)
      }
    </div>
  );
};

export default Blogs;