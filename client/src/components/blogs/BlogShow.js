import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const BlogShow = ({}) => {
  const [blog, setBlog] = useState({title: '', desc: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/blogs/${params.blogId}`)
      .then( res => {
        setBlog(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])


  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.desc}</p>
      <p>{params.blogId}</p>
    </>
  )
} 

export default BlogShow;