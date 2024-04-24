import React from 'react';
import './Blog_Form.css'; 

export default function Blog_Form() {
  return (
    <form className="blog-form">
      <label>Image URL</label>
      <input type='url' />

      <label>Title</label>
      <input type='text' />

      <label>Blog Description</label>
      <input type='text' />

      <button type='submit'>Post Blog</button>
      <button type='button'>Close</button>
    </form>
  );
}
