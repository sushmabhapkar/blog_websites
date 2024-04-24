import React, { useState } from 'react';
import './Blog_Header.css';
import Blog_Form from './Blog_Form';

export default function Blog_Header() {

  const [showForm,setShowForm]=useState(false);

  function openForm()
  {
    setShowForm(!showForm);
  }

  return (
    <div>
    <div className='header'>
      <h1>.....Blog websites...</h1>
      <button onClick={openForm}>Add New Blog</button>
    </div>
      <div>
        {showForm && <Blog_Form />}
     </div>
    </div>
  );
}
