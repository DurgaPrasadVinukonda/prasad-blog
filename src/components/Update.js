import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../useFetch';

const Update = () => {
    const { id } = useParams();
    
    const navigate=useNavigate();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const[error,setError]=useState(null);
   const  url="http://localhost:8020/blogs/" + id;
   useEffect(() => {
    setTimeout(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok){
              throw Error('could not fetch the data');
            }
            return res.json();
          })
          .then((data) => {
            // console.log(data.title);
            // console.log(data.body);
            // console.log(data.author);
            setTitle(data.title);
            setBody(data.body);
            setAuthor(data.author);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            if (err.name === 'AbortError'){
              console.log('fetch aborted')
            } else {
            //   setError(err.message);
             setIsPending(false);
            }
            
          });
      }, 1000);
    }, [url]);
   

    const handleClick = (e) => {
        e.preventDefault();
        const blog={title,body,author}
      fetch("http://localhost:8020/blogs/" + id, {
        method: "PUT",
        headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
      }).then(() => {
        console.log(`Blog ${id} updated`);
        
        navigate("/", { replace: true });
      });
    }
  
    

  return (
    <div className="create">
        <h2>Add a Form</h2>
        <form onSubmit={handleClick} >
        <label>Blog title:</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
          <label>Blog body:</label>
          <input type="text" required value={body} onChange={(e) => setBody(e.target.value)}></input>
          <label>Blog author:</label>
          <select  value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value ="mario">mario</option>
            <option value ="laurio">laurio</option>
          </select>
          {!isPending && <button>Save Blog</button>}
          {isPending && <button disabled>Saving blog ....</button>}

        </form>  
       
         
    </div>
  )
}

export default Update