import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div> 
        <h2>Not Found</h2>
        <Link to="/">Back to HomePage</Link>
    </div>
    

  )
}

export default NotFound