import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import Update from "./Update";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8020/blogs/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:8020/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/", { replace: true });
    });
  };

//   const handleEditClick = () => {
//     <Update/>
//     // navigate("/", { replace: true });
//     fetch("http://localhost:8020/blogs/" + blog.id, {
//       method: "PUT",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(blog) })
//     .then(() => {
//         console.log('Need updated ')
    
//     });
//   };

  return (
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
            <Link to={"/update/"+blog.id}>
            <button >Edit</button>
            </Link>
            
        
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
